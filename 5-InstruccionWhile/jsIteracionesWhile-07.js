/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si")
	{
	contador=contador+1
    numeroIngresado=prompt("Ingrese numero #" + contador);
	numeroIngresado=parseInt(numeroIngresado);
	acumulador=acumulador+numeroIngresado;
	respuesta=prompt("Desea seguir ingresando números? Escriba si o no:");
	}
	

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN