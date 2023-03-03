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

 	function dropquadrado(bt, id, fun){
    var res = 0;
    let drop = document.querySelector(id);
    if(fun==0){
        res=1;
        drop.style.display = 'contents';
    }else{
        drop.style.display = 'none';
    };
    let onclick = "dropquadrado(this,'"+id+"',"+res+")";

    bt.setAttribute('onclick', onclick);
}
 	