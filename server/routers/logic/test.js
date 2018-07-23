module.exports = function (app) {
  app.get('api/test', (req, res) => {
    res.json({ object: 'hello world' });
  })
}
