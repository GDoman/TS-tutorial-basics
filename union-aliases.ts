// creating type alias (your own type, really useful)
type Combinable = number | string; // union type accepts 2 or more types of input, depending on what you set
type ConversionDescriptor = 'as-number' | 'as-text'; // literal type sets explicit value of variable, often used with union

function combine(
	input1: Combinable, // = number | string
	input2: Combinable,
	resultConversion: ConversionDescriptor 
) {
	let result;

	if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}

	return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Doman', 'Ola', 'as-text');
console.log(combinedNames);
