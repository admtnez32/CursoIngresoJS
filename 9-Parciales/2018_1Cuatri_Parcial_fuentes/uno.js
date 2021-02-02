
function mostrar()
{
	//Declaracion y asignacion de variables
	var ancho;
	var largo;
	var perimetro;

		//Asignacion y parseo
		ancho = prompt("Ingrese ancho (cm)");
			parseInt(ancho);

		largo = prompt("Ingrese largo (cm)");
			parseInt(largo);

		perimetro = ancho*2+largo*2;
	
			//Mostrar
			alert("El perímetro es: "+perimetro+" cm");

}
