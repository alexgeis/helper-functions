// below benchmarking function is for *development* environments only, not production

// using console.time and console.timeEnd

console.time("testing benchmark");

// amazing function or process that we're testing

console.timeEnd("testing benchmark");

// using performance.now()

const start = performance.now();
// Javascript logic...
const end = performance.now();

console.log("This took " + (end - start) + "ms to complete");
