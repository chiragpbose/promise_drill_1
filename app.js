let num = 4;
let pr = new Promise((resolve, reject) => {
	if (num % 2 === 0) {
		resolve("this is an even number");
	} else {
		reject("this is an odd number");
	}
});

pr.then((data) => console.log(data)).catch((data) => console.log(data));
