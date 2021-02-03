/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 
	//Declaracion
	var dividendo;
	var divisor;
	var resto;
	var dividendoParseado;
	var divisorParseado;

		//Asignacion y Parseo
		dividendo = txtIdNumeroDividendo.value;
		dividendoParseado = parseInt(dividendo);

		divisor = txtIdNumeroDivisor.value;
		divisorParseado = parseInt(divisor);

		//Operacion
		resto = dividendoParseado%divisorParseado;
		//resto = parseInt(dividendo)%parseInt(divisor); //ParseInt cambia dato a enteros y así poder operarlos		
			
			//Mostrar
			alert("El resto es: "+resto);
}
