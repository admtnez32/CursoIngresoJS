/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	/*
	//Declaracion y asignacion
	var nombre;
	var edad;

		nombre = txtIdNombre.value;
		edad = txtIdEdad.value;

		//Mostrar
		alert("Usted se llama "+nombre+" y tiene "+edad+" años");
*/
	//Declaracion
	var nombre;
	var edad;
	var mens1 = "Usted se llama ";
	var mens2 = " y tiene ";
	var mens3 = " años";

		//Asignacion
		nombre = txtIdNombre.value;
		edad = txtIdEdad.value;

			//Mostrar
			alert(mens1+nombre+mens2+edad+mens3)
}

