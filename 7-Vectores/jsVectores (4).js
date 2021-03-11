function mostrar()
{
	var numeroIngresado;
	var arrayNumeros=[];
	var respuestaUsuario;
	var suma=0;

		do
		{
			numeroIngresado = parseInt(prompt("Ingrese un número."));

			arrayNumeros.push(numeroIngresado);

			suma = suma + numeroIngresado;

			respuestaUsuario = confirm("Desea continuar?");

		}while(respuestaUsuario);

		document.write(arrayNumeros+"<br>"+"<br>La suma es: "+suma);
}







	/*
	var miArray = new Array();
	var acum=0;
	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
		acum+=miArray[i];

	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");


	}

	document.write("<h1> La suma de todos los numeros es: "+acum+"</h1>")




*///FIN DE LA FUNCIÓN