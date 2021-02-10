/*Enunciado:
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.

B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marca el descuento es del 30%.

C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o 
“FelipeLamparas” se hace un descuento del 25 % y si es de otra marca
 el descuento es del 20%.

D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento
 es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es
  de otra marca un 5%.

E. Si el importe final con descuento suma más de $120 se debe sumar un 10%
 de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB
  Usted pago X”, siendo X el impuesto que se pagó.
 */
function CalcularPrecio () 
{
 	var lamparas;
 	var lamparasParseado;
 	var empresa;
 	var precioLampara = 35;
 	var precioFinal;
 	var precioIIBB;

 		lamparas = txtIdCantidad.value;
 		lamparasParseado = parseInt(lamparas);
 		empresa = Marca.value;

 			if(lamparasParseado > 5)
 			{
 				precioFinal = lamparasParseado*precioLampara/2;

 				txtIdprecioDescuento.value = precioFinal;
 			}
 			else 
 				if(lamparasParseado == 5 && empresa == "ArgentinaLuz")
 				{
 					precioFinal = lamparasParseado*precioLampara*0.6;

 					txtIdprecioDescuento.value = precioFinal;
 				}	
 					else 
 						if(lamparasParseado == 5 && empresa != "ArgentinaLuz")
 						{
 							precioFinal = lamparasParseado*precioLampara*0.7;

 							txtIdprecioDescuento.value = precioFinal;
 						}
 							else 
 								if(lamparasParseado == 4 && (empresa == "ArgentinaLuz" || empresa == "FelipeLamparas"))
 								{
 									precioFinal = lamparasParseado*precioLampara*0.75;

 									txtIdprecioDescuento.value = precioFinal;
 								}
 									else 
 										if(lamparasParseado == 4 && empresa != "ArgentinaLuz" && empresa != "FelipeLamparas")
 										{
 											precioFinal = lamparasParseado*precioLampara*0.80;

 											txtIdprecioDescuento.value = precioFinal;
 										}
 											else
 												if(lamparasParseado == 3 && empresa == "ArgentinaLuz")
 												{
 													precioFinal = lamparasParseado*precioLampara*0.85;

 													txtIdprecioDescuento.value = precioFinal;
 												}
 													else
 														if(lamparasParseado == 3 && empresa == "ArgentinaLuz")
 														{
 															precioFinal = lamparasParseado*precioLampara*0.85;

 															txtIdprecioDescuento.value = precioFinal;
 														}
 															else
 																if(lamparasParseado == 3 && empresa == "FelipeLamparas")
 																{
 																	precioFinal = lamparasParseado*precioLampara*0.90;

 																	txtIdprecioDescuento.value = precioFinal;
 																}
 																else
 																	if(lamparasParseado == 3 && empresa != "ArgentinaLuz" && empresa != "FelipeLamparas")
 																	{
 																		precioFinal = lamparasParseado*precioLampara*0.95;

 																		txtIdprecioDescuento.value = precioFinal;
 																	}
 		if(precioFinal > 120)
 		{
 			precioIIBB = precioFinal*1.1;
 			txtIdprecioDescuento.value = "El precio final con descuento + IIBB = $"+precioIIBB+ " \n IIBB = $"+ precioFinal/10;
 		}
}