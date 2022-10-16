// Immediately export a function that generates a string of random numbers and letters
// CommonJS implementation
module.exports = () =>
	Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);

// output example: e0a4

// solution 2

const UUIDGeneratorBrowser = () =>
	([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);

UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-


// solution 3
crypto.randomUUID();
> '41c43cfa-e5d9-4053-bb10-123357d580d4'