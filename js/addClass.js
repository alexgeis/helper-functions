/**
 * @name addClass
 * @description adds a class to a provided DOM element
 * @param el DOM node - HTML element (e.g. "div", "img")
 * @param className string - name of class
 * @return no value - side effect is class added to DOM element
 */
function addClass(el, className) {
	if (el.classList) el.classList.add(className);
	else if (!hasClass(el, className)) el.className += " " + className;
}

export { addClass };
