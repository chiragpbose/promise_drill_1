// 5. This challenge we'll chain promises together using `.then`
// Create two variables: `firstPromise` and `secondPromise`.

// Set `secondPromise` to be a promise that resolves to "Second!".
// Set `firstPromise` to be a promise that resolves to `secondPromise`.
//Call the firstPromise with a `.then`, which will return the secondPromise promise.
//Then print the contents of the promise after it has been resolved by
//passing `console.log` to `.then

let secondPromise = new Promise((resolve, reject) => {
	resolve("Second!");
});

let firstPromise = new Promise((resolve, reject) => {
	resolve(secondPromise);
	console.log(secondPromise);
});

firstPromise.then((data) => console.log(data));
//console.log("trrrr"+firstPromise);
