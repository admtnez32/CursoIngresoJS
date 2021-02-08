function mostrar()
{	
	//Validacion
	var edad;
	var edadParseado;

		//Asignacion
		edad = txtIdEdad.value;
		edadParseado = parseInt(edad);

			//Validacion
			if(edadParseado>17)
			{
				alert("Es mayor de edad")

			}else
				{
					alert("Es menor de edad")
				}



}//FIN DE LA FUNCIÓN