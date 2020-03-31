function getNovelData(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  const { url } = ctx.request.body;
  console.log(`[INFO] getNovelData url:${url}`);
  ctx.status = 200;
  ctx.type = 'json';
  ctx.body = JSON.stringify({
    bookId: '0',
    chapterIndex: 0,
    novelName: '元尊',
    authorName: '天蚕土豆'
  });
  console.log('[SUCCESS] getNovelData');
}

function getNovelDataOptions(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  ctx.status = 200;
  console.log('[SUCCESS] getNovelDataOptions');
}

module.exports = {
  'options /getNovelData': getNovelDataOptions,
  'post /getNovelData': getNovelData
};
