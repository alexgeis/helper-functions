/**
 * @name concatAll
 * @description flattens the input array items by n-1 dimensions
 * NOTE: this function is binding to the Array.prototype property
 * @param arr array of arrays (must be 2 or more dimensions - will not work on flat array)
 * @return array output with n-1 array dimensions
 */
Array.prototype.concatAll = function () {
	let results = [];

	this.forEach((subArray) => {
		subArray.forEach((item) => {
			results.push(item);
		});
	});

	return results;
};

// DEMO DATA
let exchanges = [
	[
		{ symbol: "XYZ", price: 240.55, volume: 12353 },
		{ symbol: "SJK", price: 23.55, volume: 842 },
	],
	[
		{ symbol: "OIQ", price: 293.55, volume: 34563 },
		{ symbol: "DGA", price: 153.55, volume: 1234 },
	],
];

// concatAll() EXAMPLE
let stocks = exchanges.concatAll();
stocks.forEach((stock) => {
	console.log(stock);
});

// // NESTED FOR EACH EXAMPLE
// exchanges.forEach(exchange=>{
//     exchange.forEach(stock=>{
//         console.log(JSON.stringify(stock))
//     })
// });
