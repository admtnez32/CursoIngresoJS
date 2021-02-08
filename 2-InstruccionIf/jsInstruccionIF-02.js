function mostrar()
{
	//Declaracion
	var edad;
	var edadParseado;

		//Asignacion
		edad = txtIdEdad.value;
		edadParseado = parseInt(edad);

			//Validacion
			if(edadParseado>17)
			{
				alert("Es mayor de edad")
			}

}//FIN DE LA FUNCIÓN