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
 	var descuento = 0;
 	var precioLampara = 35;
 	var precio;
 	var precioFinal;
 	var precioIIBB;

 		lamparas = txtIdCantidad.value;
 		lamparasParseado = parseInt(lamparas);
 		empresa = Marca.value;

  			if(lamparasParseado > 5)
 			{
 				descuento = 50;
 			}
 			else 
 				if(lamparasParseado == 5)
 				{
 					if(empresa == "ArgentinaLuz")
 					{

 							descuento = 40;
 							//MArca ArgentinaLuz %40

 							//precioFinal = lamparasParseado*precioLampara*0.6;

 							//txtIdprecioDescuento.value = precioFinal;
 					}
 					else
 					{
 						descuento = 30;
 						//Otra marca %30
 					}
 				}
 				else
 					if(lamparasParseado == 4)
 					{
 						if(empresa == "ArgentinaLuz" || empresa == "FelipeLamparas")
 						{
 							descuento = 25;
 							// Marca Arg o Felipe %25
 						}
 						else
 						{
 							descuento = 20;
 							//Otra Marca %20
 						}
 					}
 					else
 					{
 						if(lamparasParseado == 3)
 						{
 							if(empresa == "ArgentinaLuz")
 							{
 								//%15
 								descuento = 15;
 							}
 							else
 							{
 								if(empresa == "FelipeLamparas")
 								{
 									descuento = 10;
 									//%10
 								}
 								else
 								{
 									descuento = 5;
 									//Otra MArca %5
 								}
 							}
 						}
 					}

 					precio = lamparasParseado*precioLampara;
 					precioFinal = precio-(precio*descuento/100);

 					

 					if(precioFinal > 120)
 					{
 						precioIIBB = precioFinal*1.1;
 						txtIdprecioDescuento.value = "El precio final con descuento + IIBB = $"+precioIIBB.toFixed(2)+ " \n IIBB = $"+ (precioFinal/10).toFixed(2);
 					}
 					else
 					{
 						txtIdprecioDescuento.value = precioFinal.toFixed(2);
 					}
}



 				/*	
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
}*/