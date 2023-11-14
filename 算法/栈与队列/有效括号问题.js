// > 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// > 有效字符串需满足： 左括号必须用相同类型的右括号闭合。
// > 左括号必须以正确的顺序闭合。
// > 注意空字符串可被认为是有效字符串。

// > 示例 1:
// > 输入: "()"
// > 输出: true

// > 示例 2:
// > 输入: "()[]{}"
// > 输出: true

// > 示例 3:
// > 输入: "(]"
// > 输出: false

// > 示例 4:
// > 输入: "([)]"
// > 输出: false
// > 示例 5:
// > 输入: "{[]}"
// > 输出: true

const bracketMap = new Map([
  ["[", "]"],
  ["{", "}"],
  ["(", ")"],
]);

const isValid = (str) => {
  if (!str) return true;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (bracketMap.has(str[i])) {
      stack.push(bracketMap.get(str[i]));
    } else {
      if (!stack.length || stack.pop() !== str[i]) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};
console.log(isValid(""));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("{[]}"));
