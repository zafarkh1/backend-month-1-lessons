// const condition = false

// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (true) {
//       resolve("Successfully resolved");
//     } else {
//       reject("Oops something went wrong");
//     }
// 	}, 1000);
// })

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve("Successfully resolved");
//     } else {
//       reject("Oops something went wrong");
//     }
//   }, 1000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (false) {
//       resolve("Successfully resolved");
//     } else {
//       reject("Oops something went wrong");
//     }
//   }, 1000);
// });

// promise
// .then(res => console.log(res))
// .catch(rej => console.log(rej))

// ;(async() => {
// 	try {
// 		console.log(await promise);
// 	} catch (error) {
// 		console.log(error);
// 	}
// })()

// ;(async() => {
// 	const allPromises = await Promise.all([promise2, promise1, promise3]);
// 	console.log(allPromises);
// })()

// const promise = Promise.resolve('Ok')
// setTimeout(() => {
// 	console.log(1);
// });

// function fn() {
// 	return 2
// }


// promise
// .then(() => console.log(3))

// console.log(fn());
// console.log(4);

// const timers = require('node:timers')
// console.log(timers);