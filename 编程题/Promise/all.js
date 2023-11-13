// Promise.all 所有都成功或某个失败
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let ret = [];
    promises?.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          count++;
          ret[index] = res;
          if (count === promises.length) {
            resolve(ret);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
