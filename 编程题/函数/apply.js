Function.prototype.Apply = function (ctx, args) {
    ctx.func = this;
    let res = ctx.func(...args);
    delete ctx.func;
    return res;
  };
  
  