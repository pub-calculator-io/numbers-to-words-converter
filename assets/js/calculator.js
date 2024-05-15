function convert(){
	const format = input.get('format').raw();
	const letter_case = input.get('letter_case').raw();
	let number = input.get('number').gt(0).val();
	if(!input.valid()) return;

	let result = '';
	number = number.toString();
	const pointIndex = number.indexOf('.');

	if(format === 'words') {
		result = numberToWords(number);
	}
	else if(format === 'currency') {
		if(pointIndex === -1) {
			result = numberToWords(number) + ' ' + plural(number, 'dollars:dollar:dollars:dollars:dollars:dollars', {showNumber: false});
		}
		else {
			const cents = Number(number).toFixed(2).substr(pointIndex + 1);
			result = numberToWords(number.substr(0, pointIndex)) + ' ' + plural(number, 'dollars:dollar:dollars:dollars:dollars:dollars', {showNumber: false}) + ' and ' + numberToWords(cents) + ' ' + plural(cents, 'cents:cent:cents:cents:cents:cents', {showNumber: false});
		}
	}
	else if(format === 'check') {
		if(pointIndex === -1) {
			result = numberToWords(number) + ' and 00/100 ' + plural(number, 'dollars:dollar:dollars:dollars:dollars:dollars', {showNumber: false});
		}
		else {
			result = numberToWords(number.substr(0, pointIndex)) + ' and ' + Number(number).toFixed(2).substr(pointIndex + 1) + '/100 ' + plural(number, 'dollars:dollar:dollars:dollars:dollars:dollars', {showNumber: false});
		}
	}
	switch(letter_case) {
		case "UPPERCASE":
			result = result.toUpperCase();
			break;
		case "Title Case":
			result = toTitleCase(result);
			break;
		case "Sentence case":
			result = toSentenceCase(result);
			break;
		case "lowercase":
			result = result.toLowerCase();
			break;
	}
	_('result').innerHTML = result;
}