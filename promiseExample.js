const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error occurred');
  }, 1000);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);  // Output: [1, 2]
  })
  .catch((error) => {
    console.log(error);  // Output: Error occurred
  });
