Array.prototype.Map = function (func) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(func(this[i], i, this));
  }
  return newArray;
};

let array = [1, 2, 3];
let newArray = array.Map((i) => i * 2);
console.log(newArray); //[2,4,6]
