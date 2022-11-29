// 1. Create a promise. Have it resolve with a value of `Promise Resolved!` in
// resolve after a delay of 1000ms, using `setTimeout`. Print the contents of
// the promise after it has been resolved by passing `console.log` to `.then`

let pr = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise resolved!");
	}, 1000);
});

let onResolve = (resolveData) => {
	console.log(resolveData);
};
let onReject = (rejectData) => {
	console.log(rejectData);
};
pr.then(onResolve).catch(onReject);
