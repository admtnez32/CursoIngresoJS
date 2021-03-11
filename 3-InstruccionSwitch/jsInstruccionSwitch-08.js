function mostrar()
{
	var destino;

		destino = txtIdDestino.value;

		switch(destino)
		{
			case "Bariloche":
			case "Ushuaia":
				alert("Hace FRIO.");
				break;

			default:
				alert("Hace CALOR.");
				break;
		}

}//FIN DE LA FUNCIÓN