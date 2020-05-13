function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number): void { // void means that function doesn't have a return statement (ts will interfere this automatically)
	console.log('Result: ' + num);
}

function addAndHandle(n1:number, n2: number, callback: (num: number) => void) {
	const result = n1 + n2;
	callback(result);
}

printResult(add(3, 10));

let combineValues: (a: number, b: number) => number; // function type, we're setting types it takes and the type it returns. used to specify which type of function we want to use somewhere

combineValues = add;

addAndHandle(10, 20, (result) => { // passing anonymous function (concrete)
	console.log(result);
});