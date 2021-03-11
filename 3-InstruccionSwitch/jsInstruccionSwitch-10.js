/*
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche

*/

function mostrar()
{
	var destino;
	var estacion;

		destino = txtIdDestino.value;
		estacion = txtIdEstacion.value;

		if(estacion == "Invierno")
		{
			switch(destino)
			{
				case "Bariloche":
					alert("Se viaja!! :D");
					break;

				default:
					alert("No se viaja :(");
					break;
			}
		}
		else
		{
			if(estacion == "Verano")
			{
				switch(destino)
				{
					case "Mar del plata":
					case "Cataratas":
						alert("Se viaja!! :D");
						break;

					default:
						alert("No se viaja :(");
						break;
				}
			}
			else
			{
				if(estacion == "Primavera")
				{
					switch(destino)
					{
						case "Bariloche":
							alert("No se viaja :(");
							break;

						default:
							alert("Se viaja :D");
							break;
					}
				}
				else
				{
					alert("Se viaja :D");
				}
			}
		}
}//FIN DE LA FUNCIÓN