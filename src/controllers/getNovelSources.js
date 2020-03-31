function getNovelSources(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  const { novelName, authorName } = ctx.request.body;
  ctx.type = 'json';
  if (!(novelName === '元尊' && authorName === '天蚕土豆')) {
    ctx.status = 400;
    return;
  }
  ctx.status = 200;
  const fs = require('fs');
  ctx.body = fs.createReadStream(`${__dirname}/../data/novelSources.json`);
  console.log('[SUCCESS] getNovelSources');
}

function getNovelSourcesOptions(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  ctx.status = 200;
  console.log('[SUCCESS] getNovelSourcesOptions');
}

module.exports = {
  'options /getNovelSources': getNovelSourcesOptions,
  'post /getNovelSources': getNovelSources
};
