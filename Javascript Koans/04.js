/*
	Node code
	
	execute the code as - node 04.js 10 20 30

	10 20 30 - variable arguments for code
*/


const currency = [10,20,50,100,500]
let sum = 0
let numbers = []
const args = process.argv

for(var i = 2 ; i < args.length ; i++) {
	numbers.push(Number(args[i]))
}

for(var num of numbers) {
	if(currency.indexOf(num) != -1) {
		sum += num
	}
	else {
		break;
	}
}

console.log(sum)

