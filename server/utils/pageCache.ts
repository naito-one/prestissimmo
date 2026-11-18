import type { H3Event } from 'h3'

/**
 * Open the Workers cache holding rendered pages
 *
 * Each Cloudflare datacenter keeps its own copy, so an edit can't be purged everywhere. Pages expire after PAGE_CACHE_SECONDS instead.
 */
export function openPageCache() {
  return caches.open('pages')
}

/**
 * How long a rendered page stays in the cache, in seconds
 */
export const PAGE_CACHE_SECONDS = 5 * 60

/**
 * Returns the key a page request is cached under, or undefined if its response must not be cached
 *
 * A logged-in admin sees hidden posts, so their requests skip the cache.
 */
export function pageCacheKey(event: H3Event) {
  if (
    import.meta.dev ||
    event.method !== 'GET' ||
    !isPagePath(event.path) ||
    // nuxt-auth-utils always sets the session name
    getCookie(event, useRuntimeConfig(event).session.name!)
  ) {
    return undefined
  }
  const url = getRequestURL(event)
  // i18n redirects / by the locale cookie, then by the Accept-Language header
  if (url.pathname === '/') {
    url.searchParams.set(
      'cache-locale-cookie',
      getCookie(event, 'i18n_redirected') ?? '',
    )
    url.searchParams.set(
      'cache-accept-language',
      getRequestHeader(event, 'accept-language') ?? '',
    )
  }
  return url.toString()
}
