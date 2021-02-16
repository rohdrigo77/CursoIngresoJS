/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	let sumaPositivos;
	let cantPositivos;
	let cantNegativos;
	let cantCeros;
	let cantPares;
	let promPositivos;
	let promNegativos;
	let difPositivosNegativos;

	//asignar valores a variables

	cantPositivos = 0;
	cantNegativos = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;
	cantCeros = 0;
	cantPares = 0;
	promPositivos = 0;
	promNegativos = 0;
	difPositivosNegativos = 0;
	respuesta="si";

	//establecer loop
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese número");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > 0)
		{
			cantPositivos = cantPositivos + 1;
			sumaPositivos = sumaPositivos + numeroIngresado;
			if((numeroIngresado) % 2 == 0)
			{
				cantPares = cantPares + 1;
			} 
		}
		else if(numeroIngresado == 0)
		{
			cantCeros = cantCeros + 1;
			cantPares = cantPares + 1;
			sumaPositivos = sumaPositivos
			sumaNegativos = sumaNegativos
		}
		else
		{
			cantNegativos = cantNegativos + 1;
			sumaNegativos = sumaNegativos + (numeroIngresado);
			if((numeroIngresado) % 2 == 0)
			{
				cantPares = cantPares + 1;
			}
		}	
		respuesta=prompt("desea continuar?");
	}//fin del while


	//hacer las cuentas solicitadas
	promNegativos = (sumaNegativos) / cantNegativos;
	promNegativos = parseInt(promNegativos);
	promPositivos =  sumaPositivos / cantPositivos;
	promPositivos = parseInt(promPositivos);
	difPositivosNegativos = sumaPositivos + (sumaNegativos)
	difPositivosNegativos = parseInt(difPositivosNegativos);

	//en caso de que solo se hayan ingresado 0 o no haya numeros de otro tipo, corregir variables de promedios
	if (cantNegativos == 0 && cantPositivos == 0)
	{
		promNegativos = 0;
		promNegativos = parseInt(promNegativos);
		promPositivos = 0;
		promPositivos = parseInt(promPositivos);
	}
	else if(cantPositivos == 0)
	{
		promPositivos = 0;
		promPositivos = parseInt(promPositivos);
	}
	else if(cantNegativos == 0)
	{
		promNegativos = 0;
		promNegativos = parseInt(promNegativos);
	}

	//mostrar lo solicitado

	document.write("La suma de negativos es de: " + (sumaNegativos) + ". ");
	document.write("La suma de positivos es de: " + sumaPositivos + ". ");
	document.write("La cantidad de negativos es de: " + cantNegativos + ". ");
	document.write("La cantidad de positivos es de: " + cantPositivos + ". ");
	document.write("La cantidad de ceros es de: " + cantCeros + ". ");
	document.write("La cantidad de pares es de: " + cantPares + ". ");
	document.write("El promedio de negativos es de: " + (promNegativos) + ". ");
	document.write("El promedio de positivos es de: " + promPositivos + ". ");
	document.write("La diferencia entre positivos y negativos es de: " + (difPositivosNegativos) + ".");

}//FIN DE LA FUNCIÓN

// Bogado Jorge Rodrigo, Div E