/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//CORREGIR LOS PARSEO
	//Declaracion y asignacion
	var numeroUno;
	var numeroDos;
	var suma;

		numeroUno = txtIdNumeroUno.value;
		numeroDos = txtIdNumeroDos.value;
		suma = parseInt(numeroUno)+parseInt(numeroDos); //ParseInt cambia dato a enteros y así poder operarlos

			//Mostrar
			alert("La suma es: "+suma);	
}

function restar()
{	
	//Declaracion y asignacion
	var numeroUno;
	var numeroDos;
	var resta;

		numeroUno = txtIdNumeroUno.value;
		numeroDos = txtIdNumeroDos.value;
		resta = parseInt(numeroUno)-parseInt(numeroDos); //ParseInt cambia dato a enteros y así poder operarlos


	//Mostrar
	alert("La resta es: "+resta);
	
}

function multiplicar()
{ 
	//Declaracion y asignacion
	var numeroUno;
	var numeroDos;
	var producto;

		numeroUno = txtIdNumeroUno.value;
		numeroDos = txtIdNumeroDos.value;
		producto = parseInt(numeroUno)*parseInt(numeroDos); //ParseInt cambia dato a enteros y así poder operarlos


	//Mostrar
	alert("La multiplicación es: "+producto);
	
}

function dividir()
{
	//Declaracion y asignacion
	var numeroUno;
	var numeroDos;
	var cociente;

		numeroUno = txtIdNumeroUno.value;
		numeroDos = txtIdNumeroDos.value;
		cociente = parseInt(numeroUno)/parseInt(numeroDos);//ParseInt cambia dato a enteros y así poder operarlos



	//Mostrar
	alert("La división es: "+cociente);
	
}

