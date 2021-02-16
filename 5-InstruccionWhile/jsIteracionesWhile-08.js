/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si")
	{
	contador=contador+1
    numeroIngresado=prompt("Ingrese numero #" + contador);
	numeroIngresado=parseInt(numeroIngresado);
	if(numeroIngresado > 0)
	{
		sumaPositivos=sumaPositivos+numeroIngresado;	
	}
	else
	{
		multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
	} 
		respuesta=prompt("Desea seguir ingresando números? Escriba si o no:");
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN

// Bogado Jorge Rodrigo, Div E