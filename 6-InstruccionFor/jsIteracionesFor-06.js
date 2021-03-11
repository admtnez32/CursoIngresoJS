/*Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	var numeroSolicitado;
	var cantidadPares=0;

		numeroSolicitado = parseInt(prompt("Ingrese un numero"));

		for(var i=1; i<=numeroSolicitado; i++)
		{
			if(i%2 == 0)
			{
				cantidadPares++;
				document.write(i+"<br>");
			}
		}
		document.write("la cantidad de pares es: "+cantidadPares);
}//FIN DE LA FUNCIÓN