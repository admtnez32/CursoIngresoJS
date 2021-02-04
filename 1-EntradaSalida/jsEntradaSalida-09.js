/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaracion y asignacion
	var aumento = 10;
	var sueldo;
	var resultado;
	var sueldoParseado;

		//Asignacion
		sueldo = txtIdSueldo.value;
		

			//Parseo
			sueldoParseado = parseInt(sueldo);

				//Operacion
				resultado = (sueldoParseado*aumento/100)+sueldoParseado;

					//Mostrar
					txtIdResultado.value=resultado;
}
