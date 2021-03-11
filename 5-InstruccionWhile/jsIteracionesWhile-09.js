/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var flag = true;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
		do
		{
			numeroIngresado = parseInt(prompt("Ingrese un numero"));

			if(flag)
			{
				numeroMaximo = numeroIngresado;
				numeroMinimo = numeroIngresado;
				flag = false;
			}
			else
			{
				if(numeroIngresado > numeroMaximo)
				{
					numeroMaximo = numeroIngresado;
				}
				else
				{
					if(numeroIngresado < numeroMinimo)
					{
						numeroMinimo = numeroIngresado;
					}
				}
			}
			respuesta = confirm("Desea ingresar otro numero?");
			
		}while(respuesta);
				
		txtIdMaximo.value=numeroMaximo;
		txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN