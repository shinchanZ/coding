// Promise.any 一个成功，或者全部失败
function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let rejectCount = 0;
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch(() => {
          rejectCount++;
          if (rejectCount === promises.length) {
            reject(new AggregateError("All promises were rejected"));
          }
        });
    });
  });
}
