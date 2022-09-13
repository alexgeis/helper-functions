/**
 * @name removeClass
 * @description removes a CSS class from a DOM element
 * @param el DOM node - HTML element (e.g. "div", "img")
 * @param className string - name of class
 * @return no value - side effect is removed class from element
 */

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
