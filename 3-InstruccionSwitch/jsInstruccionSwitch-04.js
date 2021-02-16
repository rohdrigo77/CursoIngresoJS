/*

Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var cantDiasMes;


	switch (mesDelAño)
	{
		case "Febrero" :
        {
			cantDiasMes = 28;
			break;
		}
		case "Abril":
		case "Junio":
		case "Septiembre" :
		case "Noviembre":
		{
			cantDiasMes = 30;
			break;
		}
		default :
		{
			cantDiasMes = 31;
			break;
		}
	}

	mensaje = "El mes " + mesDelAño + " tiene " + cantDiasMes + " días."

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN
// Bogado Jorge Rodrigo, Division E