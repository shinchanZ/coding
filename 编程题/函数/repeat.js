function repeat(func, times, delay) {
  return function (...args) {
    let count = 0;
    let timer = setInterval(() => {
      count++;
      func.apply(this, args);
      if (count === times) {
        clearInterval(timer);
      }
    }, delay);
  };
}

let consoleFunc = (val) => {
  console.log(val);
};
let repeatFunc = repeat(consoleFunc, 5, 1000);
repeatFunc(5);
repeatFunc(4);
// 交替打印5 4 五次
