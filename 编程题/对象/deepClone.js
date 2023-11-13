function deepClone(obj, map = new Map()) {
  if (typeof obj !== "object" || obj === null) return obj;
  if (map.has(obj)) return map.get(obj);
  let ret = {};
  if (Array.isArray(obj)) {
    ret = [];
  }
  map.set(obj, ret);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = deepClone(obj[key]);
    }
  }
  return ret;
}
let a = {
  a: 1,
  b: {
    c: 1,
  },
};

let b = a;
let c = deepClone(a);
console.log(b, b === a);
console.log(c, c === a);
