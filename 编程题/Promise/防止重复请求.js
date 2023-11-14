// 防止重复请求
let count = 1;
let promiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(count++);
    }, 1000);
  });
};
let firstPromise = (fn) => {
  let p = null;
  return function (...args) {
    if (!p) {
      p = fn.apply(this, args).finally(() => {
        p = null;
      });
    }
    return p;
  };
};
let firstFn = firstPromise(promiseFunction);
firstFn().then((res) => {
  console.log(res);
});
firstFn().then((res) => {
  console.log(res);
});
firstFn().then((res) => {
  console.log(res);
});

setTimeout(() => {
  firstFn().then((res) => {
    console.log(res);
  });
}, 3000);
setTimeout(() => {
  firstFn().then((res) => {
    console.log(res);
  });
}, 3000);
setTimeout(() => {
  firstFn().then((res) => {
    console.log(res);
  });
}, 3000);
