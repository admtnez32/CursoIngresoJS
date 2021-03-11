function mostrar()
{
	var numeroIngresado;

		 for(;;)
		 {
		 	numeroIngresado = parseInt(prompt("Ingrese un número"));

		 	if(numeroIngresado != 9)
		 	{
		 		continue;
		 	}
		 	else
		 	{
		 		alert("Usted ingreso el número: "+numeroIngresado);
		 		break;
		 	}
		 }



}//FIN DE LA FUNCIÓN