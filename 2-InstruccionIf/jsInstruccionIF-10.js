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
			if(nota>8)
			{
				alert("EXCELENTE. Nota: "+nota);
			}
			else
			{
				if(nota>3)
				{
					alert("APROBÓ. Nota: "+nota)
				}
				else
				{
					alert("Vamos, la próxima se puede. Nota: "+nota);
				}
			}
}//FIN DE LA FUNCIÓN
