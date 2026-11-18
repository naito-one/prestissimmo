// we answer a page request from the cache when an earlier request rendered it
// rendering a page goes over the CPU limit of the Workers free plan
// server/plugins/pageCache.ts stores each rendered page under event.context.pageCacheKey

export default defineEventHandler(async (event) => {
  const key = pageCacheKey(event)
  if (!key) {
    return
  }
  const cached = await (await openPageCache()).match(key)
  if (cached) {
    return cached
  }
  event.context.pageCacheKey = key
})
