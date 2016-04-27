// If you wanted to extend JavaScript’s Math object, how would you do it? 
var myMath = Object.create(Math);

/*
We can now redefine the random function in our myMath object.
returns random whole numbers within a range if the user specifies one. Otherwise, it just calls the parent’s random function.
*/
myMath.random = function() {
	var uber = Object.getPrototypeOf(this);
	if (typeof(arguments[0]) === 'number' && typeof(arguments[1]) === 'number' && arguments[0] < arguments[1]) {
		var rand = uber.random();
		var min = Math.floor(arguments[0]);
		var max = Math.ceil(arguments[1]);
		return this.round(rand * (max - min)) + min;
	}
	return uber.random();
};


// myMath.random(-20,20) gets you a random whole number between −20 and 20, while myMath.random() gets the usual.
console.log("Range '-20,20' = ", myMath.random(-20,20));
console.log("Native random = ", myMath.random());

// Every array is an object and points to a parent prototype object.
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(elem) {
		//Your magical fix code goes here.
};
}