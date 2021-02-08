function mostrar()
{
	//Declaracion
	var edad;
	var edadParseado;

		//Asignacion
		edad = txtIdEdad.value;
		edadParseado = parseInt(edad);

			//Validacion
			if(edadParseado>12 && edadParseado<18)
			{
				alert("Es un adolescente")
			}

}//FIN DE LA FUNCIÓN