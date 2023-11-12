Array.prototype.Some = function (func) {
  let flag = false;
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      flag = true;
      break;
    }
  }
  return flag;
};

// 示例
let array = [1, 2, 3, 4];
console.log(array.Some((i) => i > 2)); //true
console.log(array.Some((i) => i < 0)); //false
