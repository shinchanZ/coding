function memo(
  func,
  resolver = (...args) => {
   return args.join("_");
  }
) {
  let cache = new Map();
  return function (...args) {
    let key = resolver(...args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const value = func.apply(this, args);
      cache.set(key, value);
      return value;
    }
  };
}

let add = (a, b) => {
  console.log("call");
  return a + b;
};
let memoAdd = memo(add);
console.log(memoAdd(1,2));//调用了函数
console.log(memoAdd(1,2));//读取缓存
console.log(memoAdd(1,3));//调用了函数
console.log('_______________');
let memoAdd2 = memo(add,()=>1);
console.log(memoAdd2(1,2));//调用函数
console.log(memoAdd2(1,4));//读取缓存
console.log(memoAdd2(1,3));//读取缓存