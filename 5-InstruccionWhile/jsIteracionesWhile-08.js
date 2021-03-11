/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var numero;
	var sumaPositivos;
	var multiplicacionNegativos;

		contador=0;
		sumaPositivos=0;
		multiplicacionNegativos=0;
		respuesta='si';

			while(respuesta == "si")
			{
				numero = parseInt(prompt("Ingrese un numero"));

				if(numero < 0)
				{
					multiplicacionNegativos = 1;
					multiplicacionNegativos = multiplicacionNegativos * numero;
				}
				else
				{
					sumaPositivos = sumaPositivos + numero;
				}

				respuesta = prompt("Si quiere ingresar otro numero escriba 'si' (sin comillas)");


			}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN