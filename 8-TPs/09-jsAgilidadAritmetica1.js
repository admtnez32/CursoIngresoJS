/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
	var numeroAleatorio1;
	var numeroAleatorio2;
	var operadorMatematico = ["+","-","*","/"];
	var operadorAleatorio;
	var respuesta;
	var resultado;


function comenzar()
{
		numeroAleatorio1 = Math.floor(Math.random()*(11-1)+1);
			console.log("numero uno: "+numeroAleatorio1);
			txtIdPrimerNumero.value = numeroAleatorio1;

		numeroAleatorio2 = Math.floor(Math.random()*(11-1)+1);
			console.log("numero dos: "+numeroAleatorio2);
			txtIdSegundoNumero.value = numeroAleatorio2;

		operadorAleatorio = Math.floor(Math.random()*4);			
			console.log("Operador mat: "+operadorMatematico[operadorAleatorio]);
			txtIdOperador.value = operadorMatematico[operadorAleatorio];

			switch(operadorAleatorio)
			{
				case 0:
					resultado = numeroAleatorio1+numeroAleatorio2;
					console.log("Resultado: "+resultado);
					break;

				case 1:
					resultado = numeroAleatorio1-numeroAleatorio2;
					console.log("Resultado: "+resultado);
					break;

				case 2:
					resultado = numeroAleatorio1*numeroAleatorio2;
					console.log("Resultado: "+resultado);
					break;

				case 3:
					resultado = numeroAleatorio1/numeroAleatorio2;
					console.log("Resultado: "+resultado.toFixed(2));
					break;
			}
}

function Responder()
{
	respuesta = parseInt(txtIdRespuesta.value);

	if(respuesta == resultado.toFixed(2))
	{
		alert("Respuesta CORRECTA!!");
	}
	else
	{
		alert("Respuesta INCORRECTA. \nLa respuesta correcta era: "+resultado.toFixed(2));
	}


}//FIN DE LA FUNCIÓN
