/**
 * @name domCreate
 * @description takes input of HTML element type, array of classes to attach to DOM element, and object with key/value pairs of attributes to apply to the DOM element
 * @param type string - HTML element (e.g. "div", "img")
 * @param classes array - array of strings with class names. for no classes, submit empty array [""]
 * @param attributes object - key/value pairs of attributes
 * @return DOM element with provided classes/attributes
 */
function domCreate(type, classes, attributes) {
	const element = document.createElement(type);

	if (Array.isArray(classes) && classes.length > 0) {
		for (let i = 0; i < classes.length; i++) {
			const className = classes[i];
			element.classList.add(className);
		}
	}

	for (const attribute in attributes) {
		element.setAttribute(attribute, attributes[attribute]);
	}
	return element;
}

export { domCreate };

const addStyles = (el, styles) => Object.assign(el.style, styles);

addStyles(document.getElementById("my-element"), {
	background: "red",
	color: "#ffff00",
	fontSize: "3rem",
});
