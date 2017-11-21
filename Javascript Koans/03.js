/*

	Node code

	execute the code as - node 03.js d w n

	d - distance
	w - minutes
	n - night
*/

const args = process.argv
let d = args[2]
let w = args[3]
let n = args[4]
let fare = 20 + 8 * (d - 1) + 4 * w

if(n == 'true') {
	fare += fare*0.5
}

console.log(fare)