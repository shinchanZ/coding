let value = 1;

let a = {
  valueOf: function () {
    return value++;
  },
  toString: function () {
    return value++;
  },
};

console.log(a == 1 && a == 2 && a == 3); // true
