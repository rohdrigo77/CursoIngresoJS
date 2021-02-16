function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	while(contador<5)
	{
	contador=contador+1
    numeroIngresado=prompt("Ingrese numero #" + contador);
	acumulador=acumulador+numeroIngresado;
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN

// Bogado Jorge Rodrigo, Div E