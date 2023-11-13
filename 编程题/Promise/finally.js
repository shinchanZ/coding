// Promise.prototype.finally
Promise.prototype.Finally = function (onFinally) {
  return this.then((val) => {
    onFinally();
    return val;
  }).catch((err) => {
    onFinally();
    throw err;
  });
};
