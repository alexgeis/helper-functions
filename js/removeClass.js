/**
 * @name removeClass
 * @description removes a CSS class from a DOM element
 * @param el DOM node - HTML element (e.g. "div", "img")
 * @param className string - name of class
 * @return no value - side effect is removed class from element
 */
function removeClass(el, className) {
	if (el.classList) el.classList.remove(className);
	else
		el.className = el.className.replace(
			new RegExp("\\b" + className + "\\b", "g"),
			""
		);
}

export { removeClass };
