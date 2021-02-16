/*

Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".

*/
function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	let mensaje;


	switch(horaDelDia)
	{
		case "7" :
		case "8" :
		case "9" :
		case "10" :
			{
				mensaje = "Es de Mañana.";
				break;
			}
		default :
			{
				mensaje = "No es de mañana.";
				break;
			}
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN
// Bogado Jorge Rodrigo, Div E