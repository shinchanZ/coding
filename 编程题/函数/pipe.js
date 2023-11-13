const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

console.log(pipe([times(2), times(3)])(1));
// 1 * 2 * 3 = 6

console.log(pipe([times(2), plus(3), times(4)])(2));
// (2 * 2 + 3) * 4 = 28

console.log(pipe([times(2), subtract(3), divide(4)])(3));
// (3 * 2 - 3) / 4 = 0.75

function pipe(functions) {
  return function (x) {
    return functions.reduce((pre, func) => {
      return func.call(this, pre);
    }, x);
  };
}
