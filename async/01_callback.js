function makeAsync(f) {
  setTimeout(() => {
    const data = 232;
    f(data);
  }, 1000);
}

makeAsync((x) => {
  console.log(x * 2);
});

makeAsync((x) => {
  console.log(x / 2);
});
