//take one argument (a number), square that number, 
//and return the result. It should also log a string 
//like "The result of squaring the number 3 is 9."
function squareNumber(){
	var num = document.getElementById('square-input').value;
	//console.log(num);
	var sqrnum = num*num;
	console.log('The result of squaring the number ' + num + ' is '+ sqrnum);
	document.getElementById('solution').innerHTML = sqrnum;

}


//take one argument (a number), divide it by 2, 
//and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(){
	var num = document.getElementById('half-input').value;
	var halfnum = num/2;
	console.log('Half of ' + num + ' is '+ halfnum);
	document.getElementById('solution').innerHTML = halfnum;
}

//will take two numbers, figure out what percent the first number 
//represents of the second number, and return the result. It should also 
//log a string like "2 is 50% of 4."
function percentOf(){
	var num1 = document.getElementById('percent1-input').value;
	var num2 = document.getElementById('percent2-input').value;
	var pct = Math.round((num1/num2)*100 * 100) / 100
	console.log(num1 + ' is ' + pct + '% of '+ num2);
	document.getElementById('solution').innerHTML = pct + '%';

}

//take one argument (the radius), calculate the area based on that, 
//and return the result. It should also log a string like "The area for 
//a circle with radius 2 is 12.566370614359172."

//bonus: round to 2 digits after the decimal
function areaOfCircle(){
	var num = document.getElementById('area-input').value;
	var area = Math.round(num*num*Math.PI * 100) / 100
	console.log('a circle with radius ' + num + ' is '+ area);
	document.getElementById('solution').innerHTML = area;
}