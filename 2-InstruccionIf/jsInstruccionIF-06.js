function mostrar()
{
	//Declaracion
	var edad;
	var edadParseado;

		//Asignacion
		edad = txtIdEdad.value;
		edadParseado = parseInt(edad);

			//Validacion
			if(edadParseado<18)
			{
				if(edadParseado<13)
				{
					alert("Es un niño")
				
				}else{

					alert("Es un adolescente")
					 }

			}else{

				alert("Es un adulto")
				 }

}//FIN DE LA FUNCIÓN