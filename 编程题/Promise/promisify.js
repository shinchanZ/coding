function promisify(asyncFunction) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      asyncFunction(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

const fs = require("fs");

const readFileAsync = promisify(fs.readFile);

readFileAsync("example.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
