// CORE TS TYPES:
// number
// string
// boolean
// object
// Array
// Tuple (fixed length array, usually 2 elements)
// Enum (used for more readable code for example if you have key-value pairs with number and description)
// Any

// const person: { // to jest zły sposób konstrukcji, typy wartości powinny być raczej interferowane (patrz deklaracja poniżej)
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string]; // to jest tuple, tablica z określoną na sztywno ilością elementów (najczęściej dwóch)
// } = {
// 	name: 'Doman',
// 	age: 33,
// 	hobbies: ['Gym', 'Games', 'Self-Development'],
// 	role: Role.ADMIN
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 1, READ_ONLY = 100, AUTHOR = 'AUTHOR' }; // domyślnie wartości lecą od 0 (jako number) w górę

const person = { // poprawna deklaracja z automatyczną interferencją typów tworzoną przez TS
	name: 'Doman',
	age: 33,
	hobbies: ['Gym', 'Games', 'Self-Development'],
	role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// console.log(hobby.map()); // !! ERROR !!
}

if (person.role === Role.AUTHOR) {
	console.log('is author');
}
