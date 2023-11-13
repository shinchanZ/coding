// Promise.reject
function promiseReject(value) {
  return new Promise((resolve, reject) => {
    reject(value);
  });
}
