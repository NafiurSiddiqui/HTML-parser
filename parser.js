	HTMLparser(text) {
		const parser = new DOMParser();
		const testDOC = parser.parseFromString(text, 'text/html');

		let parsedText = testDOC.documentElement.textContent;
		return parsedText;
	}
