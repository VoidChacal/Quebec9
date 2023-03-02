
function fatorial(){
	var valor = document.getElementById("barrafatorial").value;
	var soma = 1;
	if(valor > 0){
		while(valor>0){
			sona = soma*valor;
			console.log(valor);
			valor--;
		}
		
	}
	else{
			alert("Valor invalido")
		}
	
}
