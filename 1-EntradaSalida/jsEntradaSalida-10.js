/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaracion
	var importe;
	var descuento = 25;
	var resultado;
	var importeParseado;

		//Asignacion
		importe = txtIdImporte.value;
		
			//Parseo
			importeParseado = parseInt(importe);


				//Operacion
				resultado = importeParseado-(importeParseado*descuento/100);

					//Mostrar
					txtIdResultado.value = resultado;
}
