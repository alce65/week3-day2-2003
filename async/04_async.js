// ES2018 async

async function makeAsync() {
  const data = 232;
  return data;
}

makeAsync().then((n) => {
  console.log(n);
});
