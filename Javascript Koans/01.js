/*

	Node code

	Execute code as : node 01.js 100

	100 - number of kites

*/


const args = process.argv
const n = args[2]

for(let i = 1 ; i <= n ; i++) {
	if(i%3 == 0 && i%5 == 0) {
		console.log('Peche! Ipo kaate!')
	}
	else if(i%3 == 0) {
		console.log('Peche!')
	}
	else if(i%5 == 0) {
		console.log('Ipo kaate!')
	}
	else {
		console.log(i)
	}
}