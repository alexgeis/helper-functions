// below benchmarking function is for *development* environments only, not production
// NOTE: the precision for time functions in browsers is intentionally low as a security measure, and the rounding imposed can introduce flaws to individual results. Therefore, a larger sample size will provide more accurate results

// using console.time and console.timeEnd

console.time("testing benchmark");
for (var i = 0; i < 10000; i++) {
	// amazing function or process that we're testing
}
console.timeEnd("testing benchmark");

// using performance.now()

const start = performance.now();
// Javascript logic...
const end = performance.now();

console.log("This took " + (end - start) + "ms to complete");
