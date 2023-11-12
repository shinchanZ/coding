function chunk(array, size) {
  let chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

// 示例
console.log(chunk([1,2,3,4,5],2));//[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(chunk([1,2,3,4,5],3));//[ [ 1, 2, 3 ], [ 4, 5 ] ]
console.log(chunk([1,2,3,4,5],5));//[ [ 1, 2, 3, 4, 5 ] ]