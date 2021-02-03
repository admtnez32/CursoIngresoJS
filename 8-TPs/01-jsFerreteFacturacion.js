/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 

{
	//Declaracion
	var producto1;
	var producto2;
	var producto3;
	var prod1Parseo;
	var prod2Parseo;
	var prod3Parseo;
	var suma;

		//Asignacion
		producto1 = txtIdPrecioUno.value;
		producto2 = txtIdPrecioDos.value;
		producto3 = txtIdPrecioTres.value;

			//Parseo
			prod1Parseo = parseInt(producto1);
			prod2Parseo = parseInt(producto2);
			prod3Parseo = parseInt(producto3);

				//Operacion
				suma = prod1Parseo+prod2Parseo+prod3Parseo;

					//Mostrar
					alert("La suma es: "+suma);


}


function Promedio () 

{
	//Declaracion
	var producto1;
	var producto2;
	var producto3;
	var prod1Parseo;
	var prod2Parseo;
	var prod3Parseo;
	var prom;

		//Asignacion
		producto1 = txtIdPrecioUno.value;
		producto2 = txtIdPrecioDos.value;
		producto3 = txtIdPrecioTres.value;

			//Parseo
			prod1Parseo = parseInt(producto1);
			prod2Parseo = parseInt(producto2);
			prod3Parseo = parseInt(producto3);

				//Operacion
				prom = (prod1Parseo+prod2Parseo+prod3Parseo)/3;

					//Mostrar
					alert("El promedio es: "+prom);

}	


function PrecioFinal () 

{
	//Declaracion
	var producto1;
	var producto2;
	var producto3;
	var prod1Parseo;
	var prod2Parseo;
	var prod3Parseo;
	var suma;
	var iva;
		//Asignacion
		producto1 = txtIdPrecioUno.value;
		producto2 = txtIdPrecioDos.value;
		producto3 = txtIdPrecioTres.value;

			//Parseo
			prod1Parseo = parseInt(producto1);
			prod2Parseo = parseInt(producto2);
			prod3Parseo = parseInt(producto3);

				//Operacion
				suma = prod1Parseo+prod2Parseo+prod3Parseo;
				iva = suma*1.21;

					//Mostrar
					alert("El precio final es: "+iva);
}