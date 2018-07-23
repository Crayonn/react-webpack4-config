import chokidar from 'chokidar';

const routerPath = './server/routers';

module.exports = function () {
  const watcher = chokidar.watch(routerPath);

  watcher.on('ready', function () {
    watcher.on('all', function () {
      console.log("Clearing /server/ module cache from server");
      Object.keys(require.cache).forEach(function (id) {
        if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
      });
    });
  });
}
