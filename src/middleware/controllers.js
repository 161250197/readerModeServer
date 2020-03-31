const fs = require('fs');

function setRouter(router, handlers) {
  for (let url in handlers) {
    if (url.startsWith('get ')) {
      router.get(url.substring(4), handlers[url]);
    } else if (url.startsWith('post ')) {
      router.post(url.substring(5), handlers[url]);
    } else if (url.startsWith('options ')) {
      router.options(url.substring(8), handlers[url]);
    } else {
      console.log(`[ERROR] invalid URL: ${url}`);
    }
  }
}

function addControllers(router, dir) {
  const files = fs.readdirSync(`${__dirname}/${dir}`);
  files.filter(file => file.endsWith('.js'))
    .forEach(file => setRouter(router, require(`${__dirname}/${dir}/${file}`)));
}

module.exports = function() {
  let router = require('koa-router')();
  addControllers(router, '../controllers');
  return router.routes();
}
