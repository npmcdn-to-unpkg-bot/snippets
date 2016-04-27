// Creating an animal object - an empty object
var genericAnimal = Object.create(null);

// We add some properties and functions to our new object:
genericAnimal.name = 'Animal';
genericAnimal.gender = 'female';
genericAnimal.description = function() {
	return 'Gender: ' + this.gender + '; Name: ' + this.name;
};

// We use it!
console.log(genericAnimal.description());

// We can create other, more specific animals by using our sample object as a prototype. 
// We are cloning the object
var cat = Object.create(genericAnimal);

// We can add properties and functions
cat.purr = function() {
	return 'Purrrr!';
};

// We can use our cat as a prototype and create a few more cats:
var colonel = Object.create(cat);
colonel.name = 'Colonel Meow';

var puff = Object.create(cat);
puff.name = 'Puffy';

// properties/methods from parents were properly carried over:
console.log(puff.description());

// capybara doesn’t have a name property yet. 
// But still, when we write capybara.name, we somehow manage to see the prototype’s name property.
// The answer is in JavaScript’s method of implementing inheritance: delegation. 
// When we call capybara.name, JavaScript first looks for that property in the capybara object. 
// If not found, it looks for the property in capybara.__proto__. If it didn’t find it in capybara.__proto__, 
// it would look in capybara.__proto__.__proto__. This is known as the prototype chain.

// Since the prototype property is a reference, changing the prototype object’s properties at runtime will affect all objects using the prototype. 
var capybara = Object.create(cat);
console.log(capybara.name);
