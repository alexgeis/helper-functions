/**
 * @name memoize
 * @description memoization involves storin results of expensive function calls
 * @param value input to which logic will be applied
 * @return value of computation (simultaneously storing this result to a cache object)
 */

// EXAMPLE 1
function memoize(value, memo = {}) {
	if (value in memo) return memo[n];

	// function logic
	memo[n] = (function () {})();

	return memo[n];
}

// EXAMPLE 2
function memoize2(value) {
	// if cache object is not created yet, we instantiate the object
	if (!memoize2.cache) {
		memoize2.cache = {};
	}
	// if our computed answer already exists in the cache object, return this saved value
	if (memoize2.cache[value] !== undefined) {
		return memoize2.cache[value];
	}

	// function logic
	let resultFromLogic = (function () {})();

	// store the result in the cache as we return it
	return (memoize2.cache[value] = resultFromLogic);
}

// EXAMPLE FOR CALCULATING PRIME NUMBERS
function isPrime(value) {
	// if function property "answers" cache object is not created yet, we instantiate the object
	if (!isPrime.answers) {
		isPrime.answers = {};
	}
	// if our computed answer already exists in the "answers" object, return this saved value
	if (isPrime.answers[value] !== undefined) {
		return isPrime.answers[value];
	}
	// function logic
	let prime = value !== 1; // 1 is not prime
	for (let i = 2; i < value; i++) {
		if (value % i === 0) {
			prime = false;
			break;
		}
	}
	// store the result in the cache as we return it
	return (isPrime.answers[value] = prime);
}

export { isPrime };
