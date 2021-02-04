
function mostrar()
{
	//Declaracion y asignacion de variables
	var ancho;
	var largo;
	var perimetro;
	var anchoParseado;
	var largoParseado;


		//Asignacion y parseo
		ancho = prompt("Ingrese ancho (cm)");
			anchoParseado = parseInt(ancho);

		largo = prompt("Ingrese largo (cm)");
			largoParseado = parseInt(largo);

			//Operacion
			perimetro = anchoParseado*2+largoParseado*2;
	
				//Mostrar
				alert("El perímetro es: "+perimetro+" cm");

}
