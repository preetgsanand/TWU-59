/*

	Node code : 
	
	Execute the code as : node 02.js 10 true

	10 - number of auto rickshaws
	true - is  after eight pm
*/

const args = process.argv
const numberOfAutoRickchaws = args[2]
const isAfterEightPm = args[3]

if(numberOfAutoRickchaws > 40) {

	if(isAfterEightPm == "true") {
		console.log("No traffic jam is predicted")
	}
	else {
		console.log("Traffic jam is predicted")
	}
}
else {
	console.log("No traffic jam is predicted")
}
