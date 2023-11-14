// 业务需求中，经常有只需要最后一次请求的结果（比如搜索）编写一个高阶函数，传递旧请求方法（执行后返回 promise），返回一个新方法。
// 连续触发时，若上一次 promise 执行未结束则直接废弃，只有最后一次 promise 会触发then/reject。

/**
 * 只有最后一次promise会then与reject
 * @param {function} promiseFunction
 * promiseFunction 示例： () => fetch('data')
 */
function lastPromise(promiseFunction) {
  let count = 0;
  return function (...args) {
    count++;
    let id = count;
    return new Promise((resolve, reject) => {
      promiseFunction(...args)
        .then((res) => {
          if (id === count) {
            resolve(res);
          }
        })
        .catch((err) => {
          if (id === count) {
            reject(err);
          }
        });
    });
  };
}

// 示例用法
let count = 1;
let promiseFunction = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(count++);
    }, 1000)
  );

let lastFn = lastPromise(promiseFunction);
lastFn().then(console.log);
lastFn().then(console.log);
lastFn().then(console.log);
lastFn().then(console.log); // 输出 4
