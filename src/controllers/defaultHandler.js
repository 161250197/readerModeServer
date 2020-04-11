function defaultHandler(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  ctx.body = 'Hello reader mode!';
  console.log('[SUCCESS] defaultHandler');
}

function defaultHandlerOptions(ctx) {
  require('./../util/crossOriginHelper')(ctx);
  ctx.body = 200;
  console.log('[SUCCESS] defaultHandler');
}

module.exports = {
  'options /': defaultHandlerOptions,
  'get /': defaultHandler
};
