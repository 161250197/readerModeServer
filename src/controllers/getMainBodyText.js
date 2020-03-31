function getMainBodyText(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  const { novelName, authorName, chapterIndex } = ctx.request.body;
  ctx.type = 'json';
  const fs = require('fs');
  const chapterCount = fs.readdirSync(`${__dirname}/../data/content/`).length;
  const chapterIndexInt = parseInt(chapterIndex)
  if (!(novelName === '元尊' && authorName === '天蚕土豆' && chapterIndexInt < chapterCount && chapterIndexInt >= 0)) {
    ctx.status = 400;
    console.log(`[ERROR] getMainBodyText novelName:${novelName} authorName:${authorName} chapterIndex:${chapterIndex}`);
    return;
  }
  ctx.status = 200;
  ctx.body = {
    chapterIndex: chapterIndexInt,
    hasNext: chapterIndexInt + 1 < chapterCount,
    text: fs.readFileSync(`${__dirname}/../data/content/${chapterIndex}.txt`).toString(),
    title: require(`${__dirname}/../data/chapterTitles.json`)[chapterIndex]
  };
  console.log('[SUCCESS] getMainBodyText');
}

function getMainBodyTextOptions(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  ctx.status = 200;
  console.log('[SUCCESS] getMainBodyTextOptions');
}

module.exports = {
  'options /getMainBodyText': getMainBodyTextOptions,
  'post /getMainBodyText': getMainBodyText
};
