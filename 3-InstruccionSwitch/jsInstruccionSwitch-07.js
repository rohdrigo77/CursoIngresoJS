/*

Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let puntoCardinal;
	let mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche" :
		{
			puntoCardinal = "Sur";
			break;
		}
		case "Cataratas" :
		{
			puntoCardinal = "Norte";
			break;
		}
		case "Ushuaia" :
		{
			puntoCardinal = "Este";
			break;
		}
		default :
		{
			puntoCardinal = "Oeste";
			break;
		}
	}

	mensaje = "El lugar se encuentra al " + puntoCardinal;

	alert(mensaje);

}//FIN DE LA FUNCIÓN
// Bogado Jorge Rodrigo, Div E