/*

Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"


*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Febrero" :
			{
				mensaje = "Este mes no tiene más de 29 días.";
				break;
			}
		default :
			{
				mensaje = "Este mes tiene 30 o más días";
				break;
			}
	}
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN
//Bogado Jorge Rodrigo,  Div E