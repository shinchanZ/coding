function Curry(fn, ...args) {
  return args.length >= fn.length
    ? fn.call(this, ...args)
    : function (...innerArgs) {
        return Curry(fn, ...args, ...innerArgs);
      };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = Curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
