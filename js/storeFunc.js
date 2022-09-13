/**
 * @name storeFunc.add()
 * @description storeFunc has a cache property that stores a unique set of functions and provides associated ID key numbers for them
 * The add() method adds functions to the cache, but only if they're unique
 * @param fn function to be cached
 * @return true, if cache worked properly
 */

const storeFunc = {
	nextId: 1,
	cache: {},
	add: function (fn) {
		if (!fn.id) {
			fn.id = this.nextId++;
			this.cache[fn.id] = fn;
			return true;
		}
	},
};

function exampleFunction() {}

storeFunc.add(exampleFunction);

export { storeFunc };
