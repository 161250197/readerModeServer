function getNovelChapterData(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  const { novelName, authorName } = ctx.request.body;
  ctx.type = 'json';
  if (!(novelName === '元尊' && authorName === '天蚕土豆')) {
    ctx.status = 400;
    console.log(`[ERROR] getNovelChapterData novelName:${novelName} authorName:${authorName}`);
    return;
  }
  ctx.status = 200;
  const fs = require('fs');
  ctx.body = fs.createReadStream(`${__dirname}/../data/chapterTitles.json`);
  console.log('[SUCCESS] getNovelChapterData');
}

function getNovelChapterDataOptions(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  ctx.status = 200;
  console.log('[SUCCESS] getNovelChapterDataOptions');
}

module.exports = {
  'options /getNovelChapterData': getNovelChapterDataOptions,
  'post /getNovelChapterData': getNovelChapterData
};
