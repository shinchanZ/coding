// Promise.resolve
function promiseResolve(value) {
  if (value instanceof Promise) return value;
  return new Promise((resolve, reject) => {
    if (
      typeof value === "object" &&
      typeof value !== null &&
      typeof value.then === "function"
    ) {
      value.then(resolve, reject);
    } else {
    }
    resolve(value);
  });
}
