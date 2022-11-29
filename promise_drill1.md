1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
// Your code

```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
// Your code
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log messgae `Promise Settled!`.

```js
// Your code
```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0);

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');
```

5. This challenge we'll chain promises together using `.then` Create two variables: `firstPromise` and `secondPromise`.

Set `secondPromise` to be a promise that resolves to "Second!". Set `firstPromise` to be a promise that resolves to `secondPromise`. Call the firstPromise with a `.then`, which will return the secondPromise promise. Then print the contents of the promise after it has been resolved by passing `console.log` to `.then

```js
// Your code goes here
```

6. Write a funtion named `wait` that accepts `time` in ms and executes the function after the given time.

7. Write a basic implementation of `Promise.all` that accepts an array of promises and return another array with the data coming from all the promises. Make sure if any of the Promise gets rejected throw error. Only when all the promises are fulfilled resolve the promise.

8. Use this data endpoint to get the data and console the each house names and handle the error as well.
  [ENDPOINT](https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json)

    - Use fetch to get data.
    - Handle if the user is not connected to internet.
    - Handle error that may occure while fetching data.