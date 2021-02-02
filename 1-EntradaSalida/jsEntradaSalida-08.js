/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 
	//Declaracion y asignacion
	var dividendo;
	var divisor;
	var resto;


		dividendo = txtIdNumeroDividendo.value;
		divisor = txtIdNumeroDivisor.value;
		resto = parseInt(dividendo)%parseInt(divisor); //ParseInt cambia dato a enteros y así poder operarlos

	//Mostrar
	alert("El resto es: "+resto);
}
