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
	var importeParseado

		//Asignacion
		importe = txtIdImporte.value;
		descuento = 0.75;
		resultado = importe*descuento;

			//Parseo
			importeParseado = parseInt(importe);


			//Mostrar
			txtIdResultado.value = resultado;
}
