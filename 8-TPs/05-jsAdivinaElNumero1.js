/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random()*(101-1)+1);
	console.log("Numero secreto: "+numeroSecreto);
  
}

function verificar()
{
	var numeroIngresado;

		numeroIngresado = parseInt(txtIdNumero.value);
		console.log("Numero ingresado: "+numeroIngresado);

		contadorIntentos++;

		txtIdIntentos.value = "Intentos: "+contadorIntentos;
		console.log("Intentos: "+contadorIntentos);

		if(numeroSecreto == numeroIngresado)
		{
			alert("Usted es un ganador!!! Y en solo "+contadorIntentos+" intentos.");
		}
		else
		{
			if(numeroSecreto>numeroIngresado)
			{
				alert("Falta...");
			}
			else
			{
				alert("se pasó...");
			}
		}


	
}