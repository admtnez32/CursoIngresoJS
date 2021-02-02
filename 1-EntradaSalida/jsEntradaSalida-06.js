/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaracion y asignacion 
	var uno = txtIdNumeroUno.value;
	var dos = txtIdNumeroDos.value;
	var suma = parseInt(uno)+parseInt(dos) //ParseInt cambia dato a enteros y así poder operarlos

		//Mostrar
		alert("la suma es: "+suma);
}

