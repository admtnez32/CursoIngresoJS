function mostrar()
{
	//Declaracion
	var precio;
	var descuento;
	var final;
	var mensaje="Precio final con descuento aplicado: $";

		//Asignacion y parseo
		precio = prompt("Inserte el precio");
			parseInt(precio);

		descuento = prompt("Inserte el descuento (%)");
			parseInt(descuento);

		final = precio-(precio*descuento/100);

			//Mostrar
			alert(mensaje+final);


}
