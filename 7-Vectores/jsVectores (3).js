/*Enunciado:
al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego serán mostrados mediante
document.write().
*/

function mostrar()
{
	var arrayNumeros = [];
	var numeros;
	var respuesta;

		do
		{
			numeros = parseInt(prompt("Ingrese un numero"));

			arrayNumeros.push(numeros);

			respuesta = confirm("Ingresar otro numero?");

		}while(respuesta);

		document.write(arrayNumeros)
}



/*
	var miArray = new Array();

	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}





}//FIN DE LA FUNCIÓN
*/