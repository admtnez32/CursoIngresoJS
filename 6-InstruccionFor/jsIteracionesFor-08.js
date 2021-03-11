/*
Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/

function mostrar()
{
	var numeroIngresado;
	var primo=true;

		numeroIngresado = parseInt(prompt("Ingrese un numero."));
		
		for(var i=2; i<numeroIngresado; i++)
		{
			if(numeroIngresado%i == 0)
			{
				primo = false
				break;
			}
		}
		if(primo == true)
		{
			alert("El numero "+numeroIngresado+" es primo");
		}
		else
		{
			alert("El numero "+numeroIngresado+" no es primo");
		}
}//FIN DE LA FUNCIÓN