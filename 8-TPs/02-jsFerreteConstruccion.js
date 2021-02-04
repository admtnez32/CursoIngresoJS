/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{
	//Declaracion
	var largo;
	var ancho;
	var perimetro;
	var tresAlambres = 3;
	var resultado;
	var largoParseado;
	var anchoParseado;

		//Asignacion
		largo = txtIdLargo.value;
		ancho = txtIdAncho.value;

			//Parseo
			largoParseado = parseInt(largo);
			anchoParseado = parseInt(ancho);

				//Calculo perimetro
				perimetro = largoParseado*2+anchoParseado*2;

					//Calculo final
					resultado = perimetro*tresAlambres;

						//Mostrar
						alert("Usted necesita comprar: "+resultado+" cms de alambre.");

}


function Circulo () 
{
	
	var radio;
	var radioParseado;
	var tresAlambres = 3;
	var resultado;

		//Asignacion
		radio = txtIdRadio.value;

			//Parseo
			radioParseado = parseInt(radio);

				//Operacion
				resultado = (radioParseado*2)*Math.PI*tresAlambres;

					//Mostrar
					alert("Usted necesita comprar: "+resultado+" cms de alambre.")



}


function Materiales () 
{
	//Declaracion
	var largo;
	var ancho;
	var area;
	var largoParseado;
	var anchoParseado;
	var resultadoCal;
	var resultadoCemento;
	
		//Asignacion
		largo = txtIdLargo.value;
		ancho = txtIdAncho.value;

			//Parseo
			largoParseado = parseInt(largo);
			anchoParseado = parseInt(ancho);

				//Calculo perimetro
				area = largoParseado*anchoParseado;

					//Calculo Cemento
					resultadoCemento = area*2;

						//Calculo Cal
						resultadoCal = area*3;

							//Mostrar
							alert("Usted necesitará; \nBolsas de cemento: "+resultadoCemento+"\nBolsas de cal: "+resultadoCal);
								  	

}