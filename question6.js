// 6. Write a funtion named `wait` that accepts `time` in ms
// and executes the function after the given time.

let wait = (time) => {
	setTimeout(() => {
		console.log("Executing the function after " + time + "ms");
	}, time);
};
wait(2000);