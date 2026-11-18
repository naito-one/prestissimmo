/**
 * Returns a function giving the URL of a media in the blob storage
 */
export function useMediaUrl() {
  const { mediaBaseUrl } = useRuntimeConfig().public
  return (pathname: string) => `${mediaBaseUrl}/${pathname}`
}
