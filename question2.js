// 2. Create another promise. Now have it reject with a value of `Rejected Promise!`
// without using `setTimeout`. Print the contents of the promise after it has been
// rejected by passing console.log to `.catch`

let pr = new Promise((resolve, reject) => {
	reject("Rejected Promise!");
});

let onResolve = (resolveData) => {
	console.log(resolveData);
};
let onReject = (rejectData) => {
	console.log(rejectData);
};
pr.then(onResolve).catch(onReject);
