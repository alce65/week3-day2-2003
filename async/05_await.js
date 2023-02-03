/* eslint-disable no-new */

// ES2018 async / await
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

// IIFE
(async () => {
  try {
    const x = await makeAsync();
    console.log(x * 2);
  } catch (error) {
    console.log(error.message);
  }
})();
