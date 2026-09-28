import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { BASE_URL, routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);
const CANONICAL_HOST_PARSED = new URL(BASE_URL);
const CANONICAL_HOST = CANONICAL_HOST_PARSED.host;
const CANONICAL_HOSTNAME = CANONICAL_HOST_PARSED.hostname;
const DEBUG_HEADER = 'x-presernov-canonical';
const DEBUG_ENV_PATH = '.dbg/www-path-star.env';
const BAD_PATH_TOKENS = [
  ':path*',
  ':path',
  ':*',
  encodeURIComponent(':path*'),
  encodeURIComponent(':path'),
  encodeURIComponent(':*'),
];

function reportDebugEvent(event: {
  runId: string;
  hypothesisId: string;
  location: string;
  msg: string;
  data: Record<string, unknown>;
}) {
  // #region debug-point A:report-event
  try {
    const fs = require('node:fs');
    let url = 'http://127.0.0.1:7777/event';
    let sessionId = 'www-path-star';
    try {
      const env = fs.readFileSync(DEBUG_ENV_PATH, 'utf8');
      url = env.match(/DEBUG_SERVER_URL=(.+)/)?.[1] || url;
      sessionId = env.match(/DEBUG_SESSION_ID=(.+)/)?.[1] || sessionId;
    } catch {}
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        ts: Date.now(),
        ...event,
      }),
    }).catch(() => {});
  } catch {}
  // #endregion
}

function parseHost(raw: string | null): { hostname: string; port: string } {
  if (!raw) return { hostname: '', port: '' };
  try {
    const host = raw.trim().toLowerCase();
    const bracket = host.indexOf(']');
    if (host.startsWith('[') && bracket > -1) {
      const rest = host.slice(bracket + 1);
      const portMatch = rest.match(/^:(\d+)$/);
      return {
        hostname: host.slice(0, bracket + 1),
        port: portMatch ? portMatch[1] : '',
      };
    }
    const idx = host.lastIndexOf(':');
    if (idx === -1) return { hostname: host, port: '' };
    const maybePort = host.slice(idx + 1);
    if (/^\d+$/.test(maybePort)) {
      return { hostname: host.slice(0, idx), port: maybePort };
    }
    return { hostname: host, port: '' };
  } catch {
    return { hostname: '', port: '' };
  }
}

function getCanonicalRedirectUrl(request: NextRequest) {
  const hostHeader =
    request.headers.get('x-forwarded-host') ||
    request.headers.get('host') ||
    request.nextUrl.host ||
    '';
  const { hostname: incomingHostname, port: incomingPort } = parseHost(hostHeader);

  const needsHostRedirect = incomingHostname !== CANONICAL_HOSTNAME;
  if (!needsHostRedirect) return null;

  const protocol =
    request.headers.get('x-forwarded-proto') ||
    CANONICAL_HOST_PARSED.protocol.replace(/:$/, '') ||
    'https';

  const canonicalPort = parseHost(CANONICAL_HOST).port;
  const port = canonicalPort ? canonicalPort : incomingPort;

  const target = new URL(request.nextUrl.toString());
  target.protocol = protocol;
  target.hostname = CANONICAL_HOSTNAME;
  target.port = port;
  target.hash = request.nextUrl.hash;
  return target;
}

function getBadPathRedirectUrl(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasBadToken = BAD_PATH_TOKENS.some((token) => pathname.includes(token));
  if (!hasBadToken) return null;

  const protocol =
    request.headers.get('x-forwarded-proto') ||
    CANONICAL_HOST_PARSED.protocol.replace(/:$/, '') ||
    'https';

  const hostHeader =
    request.headers.get('x-forwarded-host') ||
    request.headers.get('host') ||
    request.nextUrl.host ||
    CANONICAL_HOST;
  const { hostname: incomingHostname, port: incomingPort } = parseHost(hostHeader);
  const hostname = incomingHostname || CANONICAL_HOSTNAME;
  const canonicalPort = parseHost(CANONICAL_HOST).port;
  const port = canonicalPort ? canonicalPort : incomingPort;

  const cleanPathname =
    pathname
      .split('/')
      .filter((seg) => seg && !BAD_PATH_TOKENS.some((t) => seg.includes(t)))
      .map((seg) => {
        let s = seg;
        for (const t of BAD_PATH_TOKENS) {
          if (s.includes(t)) s = s.split(t).join('');
        }
        return s;
      })
      .filter(Boolean)
      .join('/');

  const target = new URL(request.nextUrl.toString());
  target.protocol = protocol;
  target.hostname = hostname === CANONICAL_HOSTNAME ? hostname : CANONICAL_HOSTNAME;
  target.port = port;
  target.pathname = cleanPathname ? `/${cleanPathname}` : '/';
  target.hash = request.nextUrl.hash;
  return target;
}

export default function middleware(request: NextRequest) {
  const badPathRedirect = getBadPathRedirectUrl(request);
  if (badPathRedirect) {
    // #region debug-point D:bad-path-redirect
    reportDebugEvent({
      runId: 'pre-fix',
      hypothesisId: 'D',
      location: 'src/middleware.ts:badPathRedirect',
      msg: '[DEBUG] bad path redirect generated',
      data: {
        pathname: request.nextUrl.pathname,
        destination: badPathRedirect.toString(),
        host:
          request.headers.get('x-forwarded-host') ||
          request.headers.get('host') ||
          request.nextUrl.host ||
          '',
      },
    });
    // #endregion
    const location = badPathRedirect.toString();
    const res = NextResponse.redirect(location, {
      status: 307,
    });
    res.headers.set(DEBUG_HEADER, 'middleware-v2-bad-path');
    res.headers.set('x-presernov-location', location);
    res.headers.set(
      'x-presernov-request-path',
      request.nextUrl.pathname || ''
    );
    return res;
  }

  const canonicalRedirect = getCanonicalRedirectUrl(request);
  if (canonicalRedirect) {
    // #region debug-point A:canonical-redirect
    reportDebugEvent({
      runId: 'pre-fix',
      hypothesisId: 'A',
      location: 'src/middleware.ts:canonicalRedirect',
      msg: '[DEBUG] canonical host redirect generated',
      data: {
        pathname: request.nextUrl.pathname,
        destination: canonicalRedirect.toString(),
        host:
          request.headers.get('x-forwarded-host') ||
          request.headers.get('host') ||
          request.nextUrl.host ||
          '',
      },
    });
    // #endregion
    const location = canonicalRedirect.toString();
    const res = NextResponse.redirect(location, {
      status: 308,
    });
    res.headers.set(DEBUG_HEADER, 'middleware-v2');
    res.headers.set('x-presernov-location', location);
    res.headers.set(
      'x-presernov-host',
      request.headers.get('x-forwarded-host') ||
        request.headers.get('host') ||
        request.nextUrl.host ||
        ''
    );
    return res;
  }
  // #region debug-point E:pass-through
  reportDebugEvent({
    runId: 'pre-fix',
    hypothesisId: 'E',
    location: 'src/middleware.ts:passThrough',
    msg: '[DEBUG] request passed through intl middleware',
    data: {
      pathname: request.nextUrl.pathname,
      host:
        request.headers.get('x-forwarded-host') ||
        request.headers.get('host') ||
        request.nextUrl.host ||
        '',
    },
  });
  // #endregion
  const res = intlMiddleware(request) as NextResponse;
  try {
    if (res && 'headers' in res) {
      res.headers.set(DEBUG_HEADER, 'middleware-v2-pass');
    }
  } catch {
    /* ignore */
  }
  return res;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
