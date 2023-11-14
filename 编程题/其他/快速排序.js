const quickSort = (array) => {
  if (array.length <= 1) return array;

  let left = [],
    right = [],
    standValue = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] > standValue) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  return [...quickSort(left), standValue, ...quickSort(right)];
};

// 示例用法
const unsortedArray = [5, 3, 7, 1, 8, 2, 6, 4];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
