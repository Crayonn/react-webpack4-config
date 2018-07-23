const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.relative(appDirectory, relativePath);
const joinApp = joinPath => path.join(appDirectory, joinPath)

module.exports = {
  appDirectory,
  assetsPath: joinApp('assets'),
  srcPath: resolveApp('src'),
  htmlFilePath: joinApp('assets/index.html'),
  htmlTempletePath: resolveApp('public/index.html'),
  buildEntry: joinApp('index.js'),
  configPath: resolveApp('config'),
  packagePath: joinApp('package.json'),
  faviconPath: resolveApp('public/favicon.ico'),
}
