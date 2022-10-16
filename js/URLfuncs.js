// GET BASE URL
const getBaseURL = (url) => url.replace(/[?#].*$/, "");

getBaseURL("http://url.com/page?name=Adam&surname=Smith");
// 'http://url.com/page'

// check if the URL is absolute
const isAbsoluteURL = (str) => /^[a-z][a-z0-9+.-]*:/.test(str);

isAbsoluteURL("https://google.com"); // true
isAbsoluteURL("ftp://www.myserver.net"); // true
isAbsoluteURL("/foo/bar"); // false

// get URL parameters as object
const getURLParameters = (url) =>
	(url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
		(a, v) => (
			(a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
		),
		{}
	);

getURLParameters("google.com"); // {}
getURLParameters("http://url.com/page?name=Adam&surname=Smith");
// {name: 'Adam', surname: 'Smith'}

// URL object
const url = new URL("https://example.com/login?user=someguy&page=news");

url.origin;
// "https://example.com"
url.host;
// "example.com"
url.protocol;
// "https:"
url.pathname;
// "/login"
url.searchParams.get("user");
// "someguy"

// INTL object
const { locale, timeZone } = Intl.DateTimeFormat().resolvedOptions();
