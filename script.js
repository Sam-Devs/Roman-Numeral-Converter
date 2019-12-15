

const numberInput = document.getElementById('numberInput');
const romanInput = document.getElementById('romanInput');

numberInput.addEventListener('input', (e) =>{
	romanInput.value = numToRoman(e.target.value);
});
romanInput.addEventListener('input', (e) =>{
	numberInput.value = romanToNum(e.target.value);
});



function numToRoman(number) {
	let roman = '';
	let minNum = 0;
	let maxNum = 3999;
	const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
	if (number < minNum || number > maxNum)
	return 'Enter a number between 1 and 3999';
	else {
		for (let element in romanNumList){
		let output = Math.floor(number / romanNumList[element]);
		if (output >= 0) {
			for (let i = 0; i < output; i++) {
				roman += element;
			}
		}
		number %= romanNumList[element];
	}
	}
	return roman;
}

function romanToNum(romanNumber) {
	romanNumber = romanNumber.toUpperCase();
	const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
	const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
	let index = 0;
	let num = 0;
	for (let roman in romanNumList) {
	index = romanNumber.indexOf(romanNumList[roman]);
	while (index != -1) {
		num += parseInt(corresp[roman]);
		romanNumber = romanNumber.replace(romanNumList[roman], '-');
		index = romanNumber.indexOf(romanNumList[roman]);
	}
	}
	return num;
}
