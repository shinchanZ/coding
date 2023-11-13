Array.prototype.Bind = function (ctx, ...args) {
  let originFunction = this;

  return function (...innerArgs) {
    if (this instanceof originFunction) {
      return new originFunction(...args.concat(innerArgs));
    } else {
      return originFunction.apply(ctx, args.concat(innerArgs));
    }
  };
};
