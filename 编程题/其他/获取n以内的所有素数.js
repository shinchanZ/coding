function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function getPrime(n) {
  let ret = [];
  for (i = 2; i <= n; i++) {
    isPrime(i) && ret.push(i);
  }
  return ret
}
console.log(getPrime(10));
