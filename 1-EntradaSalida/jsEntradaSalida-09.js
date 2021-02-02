/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaracion y asignacion
	var aumento = 1.1;
	var sueldo = txtIdSueldo.value;
	var resultado = parseInt(sueldo)*aumento;

		//Mostrar
		txtIdResultado.value=resultado;
}
