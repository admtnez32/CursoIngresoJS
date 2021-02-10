function mostrar()
{
	//Declaracion
	var edad;
	var edadParseado;
	var estado;

		//Asignacion
		edad = txtIdEdad.value;
		edadParseado = parseInt(edad);
		estado = estadoCivil.value;

			//Validacion
			if(edadParseado<18 && estado != "Soltero")
			{
				
				alert("Es muy pequeño para NO ser soltero");
				
			}

}//FIN DE LA FUNCIÓN