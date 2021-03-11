/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
function mostrar()
{
	var num;
	var acumulador = 0;
	var contador = 0;

		while(contador < 5)
		{
			num = parseInt(prompt("Ingrese un numero"));

			acumulador = acumulador + num;

			contador = contador + 1;
		}
	

	alert(acumulador);
}//FIN DE LA FUNCIÓN*/

function mostrar()
{
	var contador = 0;
	var acumulador = 0;

		while(contador < 10)
		{
			contador = contador + 1;

			alert(contador);
		}


}