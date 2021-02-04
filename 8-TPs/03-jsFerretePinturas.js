/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//Declaracion
	var temperatura;
	var temperaturaParseado;
	var resultado;

		//Asignacion
		temperatura = txtIdTemperatura.value;

			//Parseo
			temperaturaParseado = parseInt(temperatura);

				//Resultado
				resultado = (temperaturaParseado-32)*(5/9);

					//Mostrar
					alert(resultado);


}

function CentigradosFahrenheit () 
{
	//Declaracion
	var temperatura;
	var temperaturaParseado;
	var resultado;

		//Asignacion
		temperatura = txtIdTemperatura.value;

			//Parseo
			temperaturaParseado = parseInt(temperatura);

				//Resultado
				resultado = (temperaturaParseado*(9/5))+32;

					//Mostrar
					alert(resultado);
}
