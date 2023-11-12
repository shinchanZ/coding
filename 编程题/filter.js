Array.prototype.Filter = function (func) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this) && res.push(this[i]);
  }
  return res;
};

// 示例
let array = [1, 2, 3];

console.log(array.Filter((i) => i > 1));//[2,3]
