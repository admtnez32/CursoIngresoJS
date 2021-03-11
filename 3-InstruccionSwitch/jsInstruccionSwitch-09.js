/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final.

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacion;
	var destino;
	var estadia = 15000;
	var descuento;
	var aumento;

		estacion = txtIdEstacion.value;
		destino = txtIdDestino.value;

		if(estacion == "Invierno")
		{
			switch(destino)
			{
				case "Bariloche":
					aumento = 20;
					alert("El precio final es: $"+(estadia+(estadia*aumento/100)));
					break;

				case "Mar del plata":
					descuento = 20;
					alert("El precio final es: $"+(estadia-(estadia*descuento/100)));
					break;

				default:
					descuento = 10;
					alert("El precio final es: $"+(estadia-(estadia*descuento/100)));
					break;
			}
		}
		else
		{
			if(estacion == "Verano")
			{
				switch(destino)
				{
					case "Bariloche":
						descuento = 20;
						alert("El precio final es: $"+(estadia-(estadia*descuento/100)));
						break;

					case "Mar del plata":
						aumento = 20;
						alert("El precio final es: $"+(estadia+(estadia*aumento/100)));
						break;

					default:
						aumento = 10;
						alert("El precio final es: $"+(estadia+(estadia*aumento/100)));
						break;
				}
			}
			else
			{
				switch(destino)
				{
					case "Cordoba":
						alert("El precio final es: $"+estadia);
						break

					default:
						aumento = 10;
						alert("El precio final es: $"+(estadia+(estadia*aumento/100)));
						break;
				}
			}
		}



}//FIN DE LA FUNCIÓN