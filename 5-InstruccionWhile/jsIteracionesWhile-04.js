/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (numeroIngresado < 0 || numeroIngresado > 10) 
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 10, el que ingresó no cumple las condiciones:");			
	}
	
	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN

// Bogado Jorge Rodrigo, Div E