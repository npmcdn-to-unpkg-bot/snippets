// Currying is when a function doesnt take all of these arguments upfront
"use strict";

// this function is not curried
let dragonBig = (name, size, element) =>
	name + ' is a ' +
	size + ' dragon that breathes ' +
	element + '!'


console.log(dragonBig('fluffykins', 'tiny', 'lightning'))

// CURRY function
// dragon is a function
// it takes a name
// return a function that take size
let dragon = 
	name => 
		size => 
			element =>
				name + ' is a ' +
				size + ' dragon that breathes ' +
				element + '!'

console.log(dragon('fluffykins')('tiny')('lightning'))

// OR

let fluffyKinsDragon = dragon('fluffykins')
console.log(fluffyKinsDragon('tiny')('lightning'))

// OR

let notFluffyKinsDragon = dragon('fluffykins')
let tinyDragon = notFluffyKinsDragon('tiny')

console.log(tinyDragon('lightning'))

let dragonsMasters = [
	{ name: 'fluffykings', element: 'lightning' },
	{ name: 'noomi', element: 'lightning' },
	{ name: 'karo', element: 'fire' },
	{ name: 'doomer', element: 'timewarp' },
]





