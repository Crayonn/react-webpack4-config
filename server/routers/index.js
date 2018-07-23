import fs from 'fs';
import { join } from 'path';
import express from 'express';

const router = express.Router();
const routerRootPath = join(__dirname, 'logic');
const paths = fs.readdirSync(routerRootPath);
paths.forEach(v => {
  if (/\.(js|jsx|es6)$/.test(v)) {
    const fn = require(join(routerRootPath, v));

    typeof fn === 'function' && fn(router);
  }
});

module.exports = router;
