var test = function(){
	var repeatedWords = XRegExp("\\b (?<word>[a-z]+) \\s+ \\k<word> \\b", "gix");
	var input = "The the test data.";

	// Check if input contains repeated words
	var hasRepeatedWords = repeatedWords.test(input); // -> true

	// Use the regex to remove repeated words
	var output = input.replace(repeatedWords, "${word}"); // -> "The test data."

	var url = "http://yahoo.com/path/to/file?q=1";
	var parser = XRegExp("^ (?<scheme> [^:/?]+ ) ://   # aka protocol   \n\
							(?<host>   [^/?]+  )       # domain name/IP \n\
							(?<path>   [^?]*   ) \\??  # optional path  \n\
							(?<query>  .*      )       # optional query   ", "x");

	var parts = parser.exec(url);
	/* ->
	parts: ["http://yahoo.com/path/to/file?q=1", "http", "yahoo.com", "/path/to/file", "q=1"]
	parts.scheme: "http"
	parts.host: "yahoo.com"
	parts.path: "/path/to/file"
	parts.query: "q=1"
	*/

	// Named backreferences available in replacement functions as properties of the first argument
	url = url.replace(parser, function (match) {
		return match.replace(match.host, "microsoft.com");
	});
	// -> "http://microsoft.com/path/to/file?q=1"
}

test();