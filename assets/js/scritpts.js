var currentNumberWharpper = document.getElementById('currentNumber');
var currentNumber =0;

function increment() {
	currentNumber = currentNumber +1;
	currentNumberWharpper.innerHTML = currentNumber;
}

function decrement() {
	currentNumber = currentNumber -1;
	currentNumberWharpper.innerHTML = currentNumber;
}