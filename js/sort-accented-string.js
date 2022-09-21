let dataSpanish = ["único", "árbol", "cosas", "fútbol"];
let dataGerman = ["Woche", "wöchentlich", "wäre", "Wann"];

/*
.sort() -> ONLY WORKS IN ENGLISH

instead, use:
localCompare()
~OR~
Intl.Collator()

*/

// localCompare()
const locCompSpan = dataSpanish.sort((a, b) => {
	return a.localeCompare(b);
});
console.log(locCompSpan); //  ["árbol", "cosas", "fútbol", "único"]

const locCompGerm = dataGerman.sort((a, b) => {
	return a.localeCompare(b);
});
console.log(locCompGerm); // ['Wann', 'wäre', 'Woche', 'wöchentlich']

// Intl.Collator() -> slightly faster
const intlCollSpan = dataSpanish.sort(Intl.Collator().compare);
console.log(intlCollSpan); //  ["árbol", "cosas", "fútbol", "único"]

const intlCollGerm = dataGerman.sort(Intl.Collator().compare);
console.log(intlCollGerm); // ['Wann', 'wäre', 'Woche', 'wöchentlich']

Intl.Collator.supportedLocalesOf();

// https://github.com/date-fns/date-fns/discussions/2724
// ^ gist of all locales and corresponding langauges
