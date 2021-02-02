/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	/*
	//Declaracion y asignacion
	var nombre = txtIdNombre.value;
	var edad = txtIdEdad.value;

		//Mostrar
		alert("Usted se llama "+nombre+" y tiene "+edad+" años");
*/

	var nombre = txtIdNombre.value;
	var edad = txtIdEdad.value;
	var mens1 = "Usted se llama "
	var mens2 = " y tiene "
	var mens3 = " años"

		alert(mens1+nombre+mens2+edad+mens3)
}

