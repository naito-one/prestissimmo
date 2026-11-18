import pageRoutes from '#page-routes'

const PAGE_ROUTES = pageRoutes.map((source) => new RegExp(`^${source}$`))

/**
 * Returns true if the given request path matches a page route
 *
 * The query string, a trailing slash and a trailing /_payload.json are ignored.
 */
export function isPagePath(path: string) {
  const pathname = path
    .split('?')[0]!
    .replace(/\/_payload\.json$/, '')
    .replace(/(.)\/$/, '$1')
  return PAGE_ROUTES.some((route) => route.test(pathname))
}
