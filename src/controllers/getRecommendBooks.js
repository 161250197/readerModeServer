function getRecommendBooks(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  const { bookId } = ctx.request.body;
  console.log(`[INFO] getRecommendBooks bookId:${bookId}`);
  ctx.status = 200;
  ctx.type = 'json';
  ctx.body = require(`${__dirname}/../data/recommendBooks.json`);
  console.log('[SUCCESS] getRecommendBooks');
}

function getRecommendBooksOptions(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  ctx.status = 200;
  console.log('[SUCCESS] getRecommendBooksOptions');
}

module.exports = {
  'options /getRecommendBooks': getRecommendBooksOptions,
  'post /getRecommendBooks': getRecommendBooks
};
