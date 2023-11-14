const isCircleStr = (str) => {
  let len = str.length;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isCircleStr("olo")); //true
console.log(isCircleStr("old")); //false
