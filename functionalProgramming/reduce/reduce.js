var fs = require('fs')
//import fs from 'fs'

var output = fs.readFileSync('data.txt', 'utf8')
	.trim() /* remove the empty last line */
	.split('\r\n') /* Remove lines break to do an array */
	.map(line => line.split('\t'))
	.reduce((customers, line) => {
		// Test if exist if not create a new one
		// we re-use the exist one or a new
		customers[line[0]] = customers[line[0]] || []
		// push an object
		customers[line[0]].push({
			name: line[1],
			price: line[2],
			quantity: line[3]
		})
		return customers
	}, {}) // we pass an empty object as start

console.log('output', JSON.stringify(output, null, 2))