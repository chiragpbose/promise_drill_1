// 8. Use this data endpoint to get the data and console the each house` names and handle the error
// as well.
//   [ENDPOINT](https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json)

//     - Use fetch to get data.
//     - Handle if the user is not connected to internet.
//     - Handle error that may occure while fetching data.

let p = fetch(
	"https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json"
);
p.then((value) => {
	return value.json();
})
	.then((jsonvalue) => {
		//console.log(jsonvalue);
		console.log(jsonvalue.houses.map((element) => element.name));
	})
	.catch((error) => {
		console.log("error terror");
	});

//console.log(jsonvalue);
