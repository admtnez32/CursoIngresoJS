/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaracion y asignacion
	var importe = txtIdImporte.value;
	var descuento = 0.75;
	var resultado = parseInt(importe)*descuento;

	//Mostrar
	txtIdResultado.value = resultado;
}
