Array.prototype.Every = function (func) {
  let flag = true;
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i], i, this)) {
      flag = false;
      break;
    }
  }
  return flag;
};

// 示例
const numbers = [1, 2, 3, 4, 5];

const isEven = (number) => {
  return number % 2 === 0;
};

const allEven = numbers.Every(isEven);
console.log(allEven); //  false