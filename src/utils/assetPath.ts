const stripLeadingSlash = (path: string) => path.replace(/^\/+/, '')

export const getStaticAssetPath = (relativePath: string) => {
  return `${import.meta.env.BASE_URL}${stripLeadingSlash(relativePath)}`
}
