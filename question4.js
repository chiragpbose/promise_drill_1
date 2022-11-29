// 4. What will be the output of the code below.

// ```js
 console.log('A');

// // Asynchronous code finises in 0 seconds (Callback Queue)
 setTimeout(() => console.log('B'), 0);

// // A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

 console.log('D');
// ```

//answer:
// A
// D
// C
// B
