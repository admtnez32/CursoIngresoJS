/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Declaracion y asignacion
	var uno = txtIdNumeroUno.value;
	var dos = txtIdNumeroDos.value;
	var suma = parseInt(uno)+parseInt(dos); //ParseInt cambia dato a enteros y así poder operarlos

	//Mostrar
	alert("La suma es: "+suma);	
}

function restar()
{	
	//Declaracion y asignacion
	var uno = txtIdNumeroUno.value;
	var dos = txtIdNumeroDos.value;
	var resta = parseInt(uno)-parseInt(dos);//ParseInt cambia dato a enteros y así poder operarlos

	//Mostrar
	alert("La resta es: "+resta);
	
}

function multiplicar()
{ 
	//Declaracion y asignacion
	var uno = txtIdNumeroUno.value;
	var dos = txtIdNumeroDos.value;
	var producto = parseInt(uno)*parseInt(dos);//ParseInt cambia dato a enteros y así poder operarlos

	//Mostrar
	alert("La multiplicación es: "+producto);
	
}

function dividir()
{
	//Declaracion y asignacion
	var uno = txtIdNumeroUno.value;
	var dos = txtIdNumeroDos.value;
	var cociente = parseInt(uno)/parseInt(dos);//ParseInt cambia dato a enteros y así poder operarlos

	//Mostrar
	alert("La división es: "+cociente);
	
}

