/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	var numero;
	var contador;
	var acumulador;
	var respuesta;

		contador=0;
		acumulador=0;
		respuesta='si';

			while(respuesta == "si")
			{
				numero = parseInt(prompt("Ingrese un numero"));

				acumulador = acumulador + numero;

				contador = contador + 1;

				respuesta = prompt("Si quiere ingresar otro numero ingrese 'si' (sin comillas)");
			}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN