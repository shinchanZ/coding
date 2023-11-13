// Promise.allSettled 所有都成功或失败
function promiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let rets = [];
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          ret[index] = { status: "fulfilled", value: result };
        })
        .catch((err) => {
          ret[index] = { status: "rejected", reason: err };
        })
        .finally(() => {
          count++;
          if (count === promises.length) {
            resolve(ret);
          }
        });
    });
  });
}
