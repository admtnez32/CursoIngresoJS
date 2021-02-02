/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaracion
	var importe;
	var descuento;
	var resultado;

		//Asignacion
		importe = txtIdImporte.value;
		descuento = 0.75;
		resultado = parseInt(importe)*descuento;

			//Mostrar
			txtIdResultado.value = resultado;
}
