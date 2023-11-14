let a = "9007199254740991";
let b = "1234567899999999999";
const add = (a, b) => {
  let maxLength = Math.max(a.length, b.length);
  let aStr = a.padStart(maxLength, "0");
  let bStr = b.padStart(maxLength, "0");
  let f = 0;
  let sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    let m = Number(aStr[i]),
      n = Number(bStr[i]);
    let t = m + n + f;
    sum = (t % 10).toString() + sum;
    f = Math.floor(t / 10);
  }
  if (f !== 0) {
    sum = f.toString() + sum;
  }
  return sum;
};
console.log(BigInt(a) + BigInt(b));
console.log(add(a, b));
