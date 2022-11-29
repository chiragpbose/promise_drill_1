// 7. Write a basic implementation of `Promise.all` that accepts an
// array of promises and return another array with the data coming from all the promises.
// Make sure if any of the Promise gets rejected throw error.
// Only when all the promises are fulfilled resolve the promise.

let pr1 = new Promise((resolve, reject) => {
	resolve("pr1 resolved!");
});
let pr2 = new Promise((resolve, reject) => {
	resolve("pr2 resolved!");
});
let pr3 = new Promise((resolve, reject) => {
	//resolve("pr3 resolved!");
    reject("pr3 rejected!");
});
let promiseArray = [pr1, pr2, pr3];
console.log(promiseArray);

Promise.all(promiseArray)
	.then((data) => console.log(data))
	.catch((data) => console.log("Error! " + data) + " is rejected!");

// let promiseAll = (promiseArray) => {
// 	let dataArray = promiseArray.reduce((arrData, promiseElement) => {
// 		promiseElement.then((data) => arrData.push(data));
// 		console.log(arrData);
// 	}, []);
// 	return dataArray.catch((data) => console.log("Error: " + data));
// };
// console.log(promiseAll(promiseArray));
