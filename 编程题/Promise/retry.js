function promiseRetry(fn, maxCount, delay) {
  return new Promise((resolve, reject) => {
    function attempt() {
      fn()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          if (maxCount === 0) {
            reject(err);
          } else {
            maxCount--;
            setTimeout(() => {
              attempt();
            }, delay);
          }
        });
    }
    attempt();
  });
}
