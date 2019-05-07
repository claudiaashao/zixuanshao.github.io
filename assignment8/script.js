var img = document.getElementsByTagName('img')[0]

var candy = document.getElementsByTagName('img')[1]

var heart = document.getElementsByTagName('img')[2]

heart.style.left = '-180px'
heart.style.top = '0px'

function feed(event){
	var x = event.clientX;
	var y = event.clientY;

	//console.log(x)

	candy.style.left = x + 'px';
	candy.style.top = y + 'px';

	if(x>150 && x<250 && y>330 && y<450){
		heart.style.left = '150px'
		heart.style.top = '500px'
	}else{
		heart.style.left = '-180px'
		heart.style.top = '0px'
	}
}









