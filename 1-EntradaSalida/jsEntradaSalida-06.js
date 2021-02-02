/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaracion 
	var uno;
	var dos;
	var suma;

		//asignacion
		uno = txtIdNumeroUno.value;
		dos = txtIdNumeroDos.value;
	 	suma = parseInt(uno)+parseInt(dos) //ParseInt cambia dato a enteros y así poder operarlos

			//Mostrar
			alert("la suma es: "+suma);
}

