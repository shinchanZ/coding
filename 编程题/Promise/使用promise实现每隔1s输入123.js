
let arr = [1, 2, 3];

arr.reduce((p, current) => {
  return p.then(() => {
    return new Promise((r) => {
      setTimeout(() => r(console.log(current)), 1000);
    });
  });
}, Promise.resolve());
