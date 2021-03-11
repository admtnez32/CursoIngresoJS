/*
Enunciado:
3. Piedra, Papel o Tijera (v 1.0):
Al comenzar el juego generaremos un número RANDOM del 1 al 3 para la selección de la máquina, 
1 para “piedra”
2 para “papel”
3 para “tijera”.
El jugador seleccionará una imagen correspondiente a su opción y le informaremos si ganó, empató o perdió
*/

var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random()*(4-1)+1);
	console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN


function piedra()
{
	switch(eleccionMaquina)
	{
		case 1:
			alert("Empate");
			break;

		case 2:
			alert("perdió");
			break;

		case 3:
			alert("Ganó");
			break;
	}
}//FIN DE LA FUNCIÓN


function papel()
{
	switch(eleccionMaquina)
	{
		case 1:
			alert("Empate");
			break;

		case 2:
			alert("perdió");
			break;

		case 3:
			alert("Ganó");
			break;
	}
}//FIN DE LA FUNCIÓN


function tijera()
{
	switch(eleccionMaquina)
	{
		case 1:
			alert("Empate");
			break;

		case 2:
			alert("perdió");
			break;

		case 3:
			alert("Ganó");
			break;
	}
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}