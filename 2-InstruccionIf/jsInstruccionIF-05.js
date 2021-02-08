function mostrar()
{
	//Declaracion
	var edad;
	var edadParseado;

		//Asignacion
		edad = txtIdEdad.value;
		edadParseado = parseInt(edad);

			//Validacion
			if(edadParseado<13 || edadParseado>17)
			{
				alert("No es un adolescente")
			}
}//FIN DE LA FUNCIÓN