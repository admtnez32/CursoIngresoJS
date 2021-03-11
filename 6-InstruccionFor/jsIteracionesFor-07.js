/*Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.
*/

function mostrar()
{
	var numeroSolicitado;
	var cantidadDivisores=0;
		numeroSolicitado = parseInt(prompt("Ingrese un numero"));

		for(var i=0; i<=numeroSolicitado; i++)
		{
			if(numeroSolicitado%i == 0)
			{
				cantidadDivisores++;

				document.write(i+"<br>");
			}
		}
		document.write("<br>Cantidad de divisores: "+cantidadDivisores);
}//FIN DE LA FUNCIÓN