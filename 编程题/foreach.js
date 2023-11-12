Array.prototype.ForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this);
  }
};
//示例
let array = [1, 2, 3];
array.ForEach((i) => {
  console.log(i);
});

//1
//2
//3