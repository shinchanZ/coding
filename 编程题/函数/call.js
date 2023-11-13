Function.prototype.Call = function (ctx, ...args) {
  ctx.func = this;
  let res = ctx.func(...args);
  delete ctx.func;
  return res;
};

console.log(Object.prototype.toString.Call([]));//[object Array]
