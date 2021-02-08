/*
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	//Declaracion
	var nota;

		//Asignacion
		nota = Math.floor(Math.random()*11);

			//Validacion
			if(nota<9)
			{
				if(nota>3)
				{
					alert("APROBÓ.")
				}else{

					alert("Vamos, la próxima se puede.")
				}
			}else{

				alert("EXCELENTE.")
			}


}//FIN DE LA FUNCIÓN