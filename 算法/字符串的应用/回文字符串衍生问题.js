// > 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// > 示例 1: 输入: "aba"
// > 输出: True
// > 示例 2:
// > 输入: "abca"
// > 输出: True
// > 解释: 你可以删除c字符。
// > 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

const validCircleStr = (str) => {
  let i = 0,
    j = str.length - 1;
  while (i < j && str[i] === str[j]) {
    i++;
    j--;
  }
  function isCircleStr(m, n) {
    while (m < n) {
      if (str[m] !== str[n]) {
        return false;
      } else {
        m++;
        n--;
      }
    }
    return true;
  }
  if (isCircleStr(i + 1, j) || isCircleStr(i, j - 1)) {
    return true;
  }
  return false;
};

console.log(validCircleStr("oleo")); //true
console.log(validCircleStr("olcd")); //false
