function mostrar()
{
	//Declaracion
	var precio;
	var descuento;
	var final;
	var mensaje="Precio final con descuento aplicado: $";
	var precioParseado;
	var descuentoParseado;

		//Asignacion y parseo
		precio = prompt("Inserte el precio");
			precioParseado = parseInt(precio);

		descuento = prompt("Inserte el descuento (%)");
			descuentoParseado = parseInt(descuento);

			//Operacion
			final = precioParseado-(precioParseado*descuentoParseado/100);

				//Mostrar
				alert(mensaje+final);


}
