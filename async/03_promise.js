/* eslint-disable no-new */

// ES6 / ES2015
function makeAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n > 0.5) {
        const data = 232;
        resolve(data * n);
      } else {
        reject(new Error(`Error ${n}`));
      }
    }, 1000);
  });
}

makeAsync()
  .then((x) => {
    console.log(x * 2);
  })
  .catch((error) => {
    console.log(error.message);
  });
