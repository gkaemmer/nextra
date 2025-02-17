const template = 'https://nextra.vercel.app'

export const getFSRoute = (asPath: string, locale?: string) => {
  const { pathname } = new URL(asPath, template)
  const cleanedPath = locale
    ? pathname.replace(new RegExp(`\\.${locale}(\\/|$)`), '$1')
    : pathname
  return (
    cleanedPath.replace(new RegExp('/index(/|$)'), '$1').split('#')[0] || '/'
  )
}
