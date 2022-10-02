/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
	// convert content object to JSON string, add 4 lines of spacing
	fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
		err ? console.error(err) : console.info(`\nData written to ${destination}`)
	);
