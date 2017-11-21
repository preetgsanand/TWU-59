/*
	Node code

	execute code as - node 05.js
*/

const input = [
	["zara", "dhyaan", "dein"],
	["mazarat", "chahenge"],
	["attention", "please"]
]


let output = []

for(var i = 0 ; i < input.length ; i++) {
	if(i == 1) {
		output = output.concat(input[i].reverse())
	}
	else {
		output = output.concat(input[i])
	}
}


console.log({
	words : output,
	count : output.length
})