
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/andredonati/github/adonati.github.io/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/andredonati/github/adonati.github.io/src/pages/index.js")),
  "component---src-pages-launch-screen-js": preferDefault(require("/Users/andredonati/github/adonati.github.io/src/pages/LaunchScreen.js"))
}

