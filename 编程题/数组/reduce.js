Array.prototype.Reduce = function (func, init) {
  let total = init ?? this[0];
  let start = (init ?? "") !== "" ? 0 : 1;
  for (let i = start; i < this.length; i++) {
    total = func(total, this[i], i, this);
  }
  return total;
};
// 示例
let array = [1, 2, 3];
let sum = array.Reduce((pre, current) => {
  return pre + current;
}, 0);
console.log(sum); //6
