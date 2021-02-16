/*

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	let destinoIngresado;
	let porcentajeAumentoODescuento;
	let porcentajeAumentoODescuentoEnPesos;
	let precioFinal;
	let mensaje;

	precioFinal = 15000;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno" :
			switch(destinoIngresado)
			{
				case "Bariloche" :
					porcentajeAumentoODescuento = 20;
					break;
				case "Mar del plata" :
					porcentajeAumentoODescuento = (-20);
					break;
				default :
					porcentajeAumentoODescuento = (-10);
					break;
			}
			break;
		case "Verano" :
			switch(destinoIngresado)
			{
				case "Bariloche" :
					porcentajeAumentoODescuento = (-20);
					break;
				case "Mar del plata" :
					porcentajeAumentoODescuento = 20;
					break;
				default :
					porcentajeAumentoODescuento = 10;
					break;
			}
			break;
		default :
			switch(destinoIngresado)
			{
				case "Cordoba":
					porcentajeAumentoODescuento = 0;
					break;
				default :
					porcentajeAumentoODescuento = 10;
					break;
			}
			break;
	}
	
	porcentajeAumentoODescuentoEnPesos = precioFinal * porcentajeAumentoODescuento / 100;
	precioFinal = precioFinal + (porcentajeAumentoODescuentoEnPesos);

	mensaje = "El precio final de su viaje es de $" + precioFinal;

	alert(mensaje);

}//FIN DE LA FUNCIÓN
//Bogado Jorge Rodrigo, Div E