// 防抖
function debounce(
  func,
  delay,
  option = {
    leading: false,
    trailing: true,
  }
) {
  let lock = false;
  let timer = null;

  return function (...args) {
    if (option.leading) {
      if (lock) {
        clearTimeout(timer);
      } else {
        func.apply(this, args);
        lock = true;
      }
      timer = setTimeout(() => {
        lock = false;
      }, delay);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        option.trailing && func.apply(this, args);
      }, delay);
    }
  };
}
let func = (count) => {
  console.log(count);
};
// 先执行
let debounceFunc = debounce(func, 1000, { leading: true, trailing: false });
debounceFunc(1)
debounceFunc(2)
debounceFunc(3)
setTimeout(()=>{
    debounceFunc(4)
},1000)
// 1
// 4

// 延迟之后执行
let debounceTrailingFunc = debounce(func, 1000, { leading: false, trailing: true });
debounceTrailingFunc(1)
debounceTrailingFunc(2)
debounceTrailingFunc(3)
setTimeout(()=>{
    debounceTrailingFunc(4)
},1000)
// 3
// 4