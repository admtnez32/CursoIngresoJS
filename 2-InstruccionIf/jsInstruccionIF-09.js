/*
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	//Declaracion
	var numero;

		//Asignacion
		numero = Math.floor(Math.random()*101);

			//Validacion
			if(numero <11 && numero > 0)
			{
				alert(numero);
			}

			

}//FIN DE LA FUNCIÓN