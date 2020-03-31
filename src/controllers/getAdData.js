function getAdData(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  const { adId } = ctx.request.body;
  console.log(`[INFO] getAdData adId:${adId}`);
  ctx.status = 200;
  ctx.type = 'json';
  const {
    port,
    host
  } = require('./../data/setting.json')
  ctx.body = JSON.stringify({
    "adId": "0",
    "picture": `http://${host}:${port}/ad.jpg`,
    "title": "南京大学",
    "info": "做中国最好的本科教育"
  })
  console.log('[SUCCESS] getAdData');
}

function getAdDataOptions(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  ctx.status = 200;
  console.log('[SUCCESS] getAdDataOptions');
}

module.exports = {
  'options /getAdData': getAdDataOptions,
  'post /getAdData': getAdData
};
