/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaracion y asignacion
	var aumento;
	var sueldo;
	var resultado;
	var sueldoParseado;

		//Asignacion
		aumento = 1.1;
		sueldo = txtIdSueldo.value;
		resultado = sueldo*aumento;

			//Parseo
			sueldoParseado = parseInt(sueldo)

				//Mostrar
				txtIdResultado.value=resultado;
}
