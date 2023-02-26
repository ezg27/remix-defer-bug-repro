/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [
    '@remix-run/node',
    '@remix-run/server-runtime',
    '@remix-run/router',
  ],
}
