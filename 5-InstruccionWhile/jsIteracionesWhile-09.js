/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	numeroMaximo = numeroIngresado;
	numeroMaximo = parseInt(numeroMaximo);
	numeroMinimo = numeroIngresado;
	numeroMinimo = parseInt(numeroMinimo);
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(banderaDelPrimero == "es el primero")
	{
		numeroIngresado = prompt("Ingrese número");
		numeroIngresado = parseInt(numeroIngresado);
		numeroMaximo = numeroIngresado;
		numeroMaximo = parseInt(numeroMaximo);
		numeroMinimo = numeroIngresado;
		numeroMinimo = parseInt(numeroMinimo);
		banderaDelPrimero = "ya no es el primero"
		respuesta=prompt("desea continuar?");	
	}
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese número");
		numeroIngresado = parseInt(numeroIngresado);
	  	if(numeroIngresado>numeroMaximo)
	    {
		  	numeroMaximo = numeroIngresado;
		  	numeroMaximo = parseInt(numeroMaximo);
		}
		else if(numeroIngresado<numeroMinimo)
		{
		  	numeroMinimo = numeroIngresado;
		  	numeroMinimo = parseInt(numeroMinimo);
		}
		respuesta=prompt("desea continuar?");
		
		
	}
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}

//FIN DE LA FUNCIÓN

// Bogado Jorge Rodrigo, Div E