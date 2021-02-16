/*

Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let clima;

	switch(destinoIngresado)
	{
		case "Bariloche" :
		case "Ushuaia" :
			clima = "Hace frío";
			break;
		default :
			clima = "Hace calor";
			break;
	}
	alert(clima);

}
//FIN DE LA FUNCIÓN

// Bogado Jorge Rodrigo, Div E