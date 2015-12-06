 var animals = [
 	{ name:'Fluffykings', 	species: 'rabbit'},
 	{ name:'Caro', 			species: 'dog'},
 	{ name:'Hamilton', 		species: 'dog'},
 	{ name:'Harold', 		species: 'fish'},
 	{ name:'Ursula', 		species: 'cat'},
 	{ name:'Jimmy', 		species: 'fish'}
 ];
 
var isDog = function(animal) {
	return animal.species === 'dog';
};

var dogs = animals.filter(isDog);

console.log("filtered dogs");
console.log(dogs);

// Map will include all items
// expects to return a transformed object // name there
var names = animals.map(function(animal) { return animal.name; });

/* 
 ECMASCRIPT 6, arrow function
*/

var names = animals.map((animal) => { return animal.name; });

var names = animals.map((animal) => animal.name);

var names = animals.map((x) => x.name);

console.log("Array of animal's name");
console.log(names);
 

var orders = [
	{ amount: 250 },
	{ amount: 400 },
	{ amount: 100 },
	{ amount: 325 }
];

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log("Amount sum");
console.log(totalAmount);


var orders2 = [
    ["Mark Johansson", "waffle iron", 80, 2],
    ["Mark Johansson", "blender", 200, 1],
    ["Mark Johansson", "knife", 10, 4],
    ["Nikita Smith", "waffle iron", 80, 1],
    ["Nikita Smith", "knife", 10, 2],
    ["Nikita Smith", "pot", 20, 3]
];

var output = orders2.reduce(function (customers, line) {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    });
    return customers;
}, {});
console.log("orders2 output:", JSON.stringify(output, null, 2));











