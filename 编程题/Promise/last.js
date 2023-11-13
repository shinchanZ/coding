// Promise.last 所有成功算最后一个成功的，一个失败算失败
function promiseLast(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((res) => {
          if (count === promises.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
