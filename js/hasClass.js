/**
 * @name hasClass
 * @description checks if a DOM element contains a certain CSS class
 * @param el DOM node - HTML element (e.g. "div", "img")
 * @param className string - name of class
 * @return boolean value
 */
function hasClass(el, className) {
	return el.classList
		? el.classList.contains(className)
		: new RegExp("\\b" + className + "\\b").test(el.className);
}

export { hasClass };
