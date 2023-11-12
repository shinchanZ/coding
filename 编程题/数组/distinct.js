function distinct(array, func) {
  let set = new Set();
  return array.filter((i) => {
    let value = func ? func(i) : JSON.stringify(i);
    if (!set.has(value)) {
      set.add(value);
      return true;
    } else {
      return false;
    }
  });
}
// 示例

console.log(distinct([1, 1, 1, 2])); //[ 1, 2 ]
console.log(distinct([{ value: 1 }, { value: 1 }], (i) => i.value)); //[ { value: 1 } ]
