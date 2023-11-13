function New(constructor, ...args) {
  let obj = Object.create(constructor.prototype);
  let result = constructor.apply(obj, args);
  return Object.prototype.toString.call(result) === "[object Object]"
    ? result
    : obj;
}

let obj = New(Object, { a: 1 });
console.log(obj);
