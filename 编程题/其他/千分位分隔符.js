//toLocaleString
// let number1 = 1234343433,
//   number2 = 1122222222.111111;

// let formatNumber = (number) => {
//   return number.toLocaleString();
// };

// console.log(formatNumber(number1));//1,234,343,433
// console.log(formatNumber(number2));//1,122,222,222.111 小数会四舍五入保留三位
// 遍历字符串的形式
let number1 = 1234343433,
  number2 = 1122222222.111111;

let formatNumber = (number) => {
  let splitNumber = number.toString().split(".");
  let intNumber = splitNumber[0];
  let reverseInt = [...intNumber].reverse();
  let ret = [];
  for (let i = 0; i < reverseInt.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      ret.push(",");
    }
    ret.push(reverseInt[i]);
  }

  return `${ret.reverse().join("")}${
    splitNumber.length > 1 ? `.${splitNumber[1]}` : ""
  }`;
};

console.log(formatNumber(number1));
console.log(formatNumber(number2));