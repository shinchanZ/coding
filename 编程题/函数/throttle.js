function throttle(
  func,
  delay,
  option = {
    leading: true,
    trailing: true,
  }
) {
  let timer = null;
  let lastCallTime = 0;
  return function (...args) {
    let { leading, trailing } = option;
    let currentTime = Date.now();
    if (!leading && !trailing) lastCallTime = currentTime;
    if (leading && currentTime - lastCallTime >= delay) {
      func.apply(this, args);
      lastCallTime = currentTime;
    } else if (trailing) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
        lastCallTime = Date.now();
      }, delay - (currentTime - lastCallTime));
    }
  };
}

let func = (count) => {
    console.log(count);
  };
// 仅开始前执行
let throttleFunc = throttle(func, 1000, { leading: true, trailing: false });
throttleFunc(1)
throttleFunc(2)
throttleFunc(3)
// 1

// 开始结束都执行
let throttleTrailingFunc = throttle(func, 1000, { leading: true, trailing: true });
throttleTrailingFunc(1)
throttleTrailingFunc(2)
throttleTrailingFunc(3)
// 1
// 3