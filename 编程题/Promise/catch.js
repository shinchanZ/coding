// Promise.prototype.catch
Promise.prototype.Catch = function (onRejected) {
  return this.then(null, onRejected);
};
