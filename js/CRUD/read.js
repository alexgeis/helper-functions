// node.js API - replace file system (fs) with desired library
const fs = require("fs");
// node.js API - used to create a promise
const util = require("util");
const writeToFile = require("./create.js");

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
	fs.readFile(file, "utf8", (err, data) => {
		if (err) {
			console.error(err);
		} else {
			const parsedData = JSON.parse(data);
			parsedData.push(content);
			writeToFile(file, parsedData);
		}
	});
};

module.exports = { readFromFile, readAndAppend };

// promise version

const readFromFilePromise = (file) => {
	return new Promise((resolve, reject) => {
		fs.readFile(file, `utf8`, (err, data) => {
			if (err) reject(console.error(err));

			resolve(data);
		});
	});
};
readFromFilePromise.then();
