# Debug Session: www-path-star

- Status: OPEN
- Started: 2026-09-28
- Symptom: Opening `www.presernovtrg.com` redirects to `https://presernovtrg.com/:path*` and results in 404.
- Goal: Identify whether the bad redirect is produced by app code, deployment artifact, edge rule, or client-side cached permanent redirect, then apply the minimal verified fix.

## Hypotheses

1. A Cloudflare edge redirect rule is still emitting the literal `:path*` destination before the request reaches the app.
2. The deployed build is stale and still contains an older `next.config` redirect instead of the newer middleware-based host canonicalization.
3. A browser or CDN cached `308` is serving the old bad `Location` header even though the current code no longer generates it.
4. The request path reaching the app already contains a literal `:path*`, and the app lacks a reliable early normalization path for that malformed URL.
5. The current middleware matcher or execution order skips some `www` requests, letting a fallback route or platform rule handle them incorrectly.

## Hypotheses & Verification

| ID | Hypothesis | Likelihood | Effort | Evidence |
|----|------------|------------|--------|----------|
| A | Cloudflare edge redirect rule is emitting the literal `:path*` before the app runs | High | Low | Confirmed by live `curl` response for `https://www.presernovtrg.com/` returning `308` with `Location: https://presernovtrg.com/:path*` and no app debug headers |
| B | The deployed build is stale and still contains an old app redirect | Medium | Medium | Inconclusive. Current repo no longer contains `next.config.ts` redirects, but production root redirect happens before app headers are visible |
| C | Browser or CDN cached the old permanent redirect | Medium | Low | Rejected as sole cause because direct live `curl` from the terminal reproduces the bad `Location` header |
| D | A malformed `:path*` request reaches the app and needs app-side normalization | Low | Low | Rejected as primary cause. The bad redirect is already present in the first live response from `www` root |
| E | Some requests bypass app middleware and are handled elsewhere | High | Low | Confirmed by contrast between `www` root returning bad absolute redirect and `www/sl/` returning `/sl`, showing different handling paths |

## Log Evidence

- 2026-09-28 live probe:
  - `curl -I https://www.presernovtrg.com/`
  - Response: `HTTP/1.1 308 Permanent Redirect`
  - Header: `Location: https://presernovtrg.com/:path*`
- 2026-09-28 live probe:
  - `curl -I https://presernovtrg.com/`
  - Response: `HTTP/1.1 200 OK`
- 2026-09-28 live probe:
  - `curl -I https://www.presernovtrg.com/sl/`
  - Response: `HTTP/1.1 308 Permanent Redirect`
  - Header: `Location: /sl`
- Instrumentation was added to `src/middleware.ts` for app-side redirect reporting. Local Node-level execution could not import the full Next runtime directly, so the decisive evidence remained the live edge responses above.

## Verification Conclusion

- Primary root cause is outside the Next app runtime.
- The live bad redirect is produced by a Cloudflare edge rule or equivalent deployment-level redirect still serving `:path*`.
- App-side middleware hardening is useful as a fallback, but cannot override a redirect that happens before the request reaches the app.

## Next Step

- Remove or correct the live Cloudflare redirect rule so `www.presernovtrg.com` forwards to `https://presernovtrg.com/${1}` or let app middleware handle host canonicalization.
