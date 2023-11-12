Array.prototype.Shuffle = function () {
  for (let i = 0; i < this.length; i++) {
    let index = Math.floor(Math.random() * this.length);
    [this[index], this[i]] = [this[i], this[index]];
  }
};

// 示例
let array = [1, 2, 3, 4, 5];
array.Shuffle();
console.log(array);
array.Shuffle();
console.log(array);
