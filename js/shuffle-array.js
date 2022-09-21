/* 
using the Fisher-Yates Shuffling algo

in-place O(n) shuffle:
1. pick a random remaining element (from the front of array)
2. place in its new location (in the back of array). 
3. unshuffled element in the back is swapped to the front, where it waits for subsequent shuffling
 */

function shuffle(array) {
	let m = array.length,
		temp,
		i;

	// While there remain elements to shuffle
	while (m) {
		// Pick a remaining element
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element
		temp = array[m];
		array[m] = array[i];
		array[i] = temp;
	}

	return array;
}
