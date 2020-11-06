export default (ctx, next) => {
  const req = ctx.request;

  // extends ok method to context, namely ctx.ok
  ctx.ok = function(data) {
    return {
      api: req.header.host + req.url.match(/([\/\-\w]+)\??/)[1],
      version: req.url.match(/([\/\-\w]+)\??/)[1],
      data: data,
      ret: 'success::api call succeed',
      timestamp: new Date().getTime()
    };
  };

  return next();
};