function Create(target, propertiesObject) {
  const obj = {};
  obj.__proto__ = target;

  //   function F() {}
  //   F.prototype = target;
  //   const obj = new F();

  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }

  return obj;
}
let b = { b: 1 };
let a = Create(b, {
  a: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
console.log(a);
console.log(a instanceof b.__proto__.constructor);
