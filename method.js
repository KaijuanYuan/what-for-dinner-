var classes = [];



//draw the final circle 
function draw(canId){

	var text = textar.value;
	text = text.split("\n");
	var N = text.length;

	
	for(var i=0; i<N; i++) 
	{
		classes.push(text[i]);
	}
	
	var dinner = Math.random() * (N-1);

	document.getElementById("result").innerHTML += classes[parseInt(dinner)] + "\n";
	
	return 0;
		
}

function add(){
	var obj = document.getElementById("selection");
	var text = obj.options[obj.selectedIndex].value;
	document.getElementById("textar").innerHTML += text + "\n";
}






