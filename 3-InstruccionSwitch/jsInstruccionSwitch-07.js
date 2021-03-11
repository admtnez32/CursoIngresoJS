function mostrar()
{
	var destino;

		destino = txtIdDestino.value;

		switch(destino)
		{
			case "Cataratas":
				alert("Se encuentra al NORTE.");
				break;

			default:
				alert("Se encuentra al SUR.");
				break;
		}

}//FIN DE LA FUNCIÓN