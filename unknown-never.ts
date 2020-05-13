let userInput: unknown; // new type, used when you are not sure what will come (better than 'any')
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
	userName = userInput;
}

function generateError(message: string, code: number): never { // new type, similar to void
	throw {
		message: message, errorCode: code
	};
	// while (true) {} 
}

generateError('An error occurred!', 500);
