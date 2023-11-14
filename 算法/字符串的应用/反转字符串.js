const reverseStr1 = (str) => {
  return str.split("").reverse().join('');
};
console.log(reverseStr1("hello"));

const reverseStr2 = (str) => {
  let strArray = str.split("");
  for (let i = 0; i < strArray.length / 2; i++) {
    let temp = strArray[i];
    strArray[i] = strArray[strArray.length - i - 1];
    strArray[strArray.length - i - 1] = temp;
  }
  return strArray.join("");
};
console.log(reverseStr2("hello"));
