/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));

			while(isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 10)
			{
				alert("Numero ingresado INCORRECTO. Ingrese un numero correcto.");

				numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
			}

		txtIdNumero.value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN