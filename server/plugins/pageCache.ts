// we store each rendered page that server/middleware/pageCache.ts didn't find in the cache

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response, { event }) => {
    const key: string | undefined = event.context.pageCacheKey
    const status = response.statusCode ?? 200
    // redirects are cached too, since rendering one runs the same route middleware and queries
    if (!key || (status !== 200 && status !== 302)) {
      return
    }
    const headers = new Headers(response.headers)
    // i18n sets its locale cookie on the first visit. Other visitors must not get that cookie
    headers.delete('set-cookie')
    headers.set('cache-control', `s-maxage=${PAGE_CACHE_SECONDS}`)
    event.waitUntil(
      openPageCache().then((cache) =>
        cache.put(key, new Response(response.body, { status, headers })),
      ),
    )
  })
})
