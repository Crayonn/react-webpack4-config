const express = require('express');
const bodyParser = require('body-parser');
var history = require('connect-history-api-fallback');
const cors = require('cors');
const watcher = require('./watcher');
const getWebpackMiddleware = require('./getWebpackMiddleware');
const PORT = process.PORT || 3000;
const app = express();
const { devMiddleware, hotMiddleware } = getWebpackMiddleware();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(history({
  logger: console.log.bind(console),
  htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
}));
app.use(devMiddleware);
app.use(hotMiddleware);
app.use((...args) => require('./routers')(...args));
app.use(cors());
watcher();

app.listen(PORT, v => {
  console.log(`Express server listening on port ${PORT}`);
})




