Array.prototype.Flat = function (level = 1) {
  if (level === 0) return this;
  let array = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      array = array.concat(this[i].Flat(level - 1));
    } else {
      array = array.concat(this[i]);
    }
  }
  return array;
};

// 示例
const arr = [
  [1, [1, 2]],
  [3, 4],
  [5, 6],
];
console.log(arr.Flat(1)); //[ 1, [ 1, 2 ], 3, 4, 5, 6 ]
console.log(arr.Flat(2)); //[ 1, 1, 2, 3,4, 5, 6]
console.log(arr.Flat(Infinity)); //[ 1, 1, 2, 3,4, 5, 6]
