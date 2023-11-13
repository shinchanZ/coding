function Compose(...fns) {
  return function (init) {
    return fns.reduceRight((result, fn) => fn.call(this, result), init);
  };
}

const add5 = (x) => x + 5;
const double = (x) => x * 2;
const subtract3 = (x) => x - 3;

// 组合函数
const composedFunction = Compose(subtract3, double, add5);

const result = composedFunction(10); // 先加5，再乘2，最后减3，结果为 17
console.log(result); // 输出 27
