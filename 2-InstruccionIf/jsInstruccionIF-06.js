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
				alert("Es mayor de edad");
			}
			else
			{
				if(edadParseado<13)
				{
					alert("Es menor de edad");
				}
				else
				{
					alert("Es adolescente");
				}
			}				
}//FIN DE LA FUNCIÓN