var x = 0;
 	var y = 0;
 	window.addEventListener("keydown",function(event){
 		var tecla = event.keyCode
 		if (tecla == 39){
 			x = x + 10
 			document.getElementById("quadrado").style.left=x+"px"
 		}
 		if (tecla == 37){
 			x = x - 10
 			document.getElementById("quadrado").style.left=x+"px"
 		}
 		if (tecla == 38){
 			y = y - 10
 			document.getElementById("quadrado").style.top=y+"px"
 		}
 		if (tecla == 40){
 			y = y + 10
 			document.getElementById("quadrado").style.top=y+"px"
 		}
 	})