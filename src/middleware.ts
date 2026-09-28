import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { BASE_URL, routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);
const CANONICAL_HOST_PARSED = new URL(BASE_URL);
const CANONICAL_HOST = CANONICAL_HOST_PARSED.host;
const CANONICAL_HOSTNAME = CANONICAL_HOST_PARSED.hostname;
const DEBUG_HEADER = 'x-presernov-canonical';

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

  if (
    !incomingHostname ||
    incomingHostname === CANONICAL_HOSTNAME ||
    incomingHostname === `www.${CANONICAL_HOSTNAME}` ||
    incomingHostname.endsWith(`.${CANONICAL_HOSTNAME}`)
  ) {
    /* only normalize exact www.<canonical> or other known subdomains later */
  }

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

export default function middleware(request: NextRequest) {
  const canonicalRedirect = getCanonicalRedirectUrl(request);
  if (canonicalRedirect) {
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
