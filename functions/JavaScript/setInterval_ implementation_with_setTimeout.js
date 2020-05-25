function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delayInms);
  });
}
async function simulateSecondsCounter() {
  for (var i = 0; i <= 5; i++) {
    console.log(i);
    await delay(1000);
  }
  console.log("done!");
}
simulateSecondsCounter();
