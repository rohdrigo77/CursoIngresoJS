function mostrar()
{

	let numeroRandom;
	let mensaje;

	//Genero el número RANDOM entre 1 y 10 
	numeroRandom = Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
	if (numeroRandom >= 9 )
	{
		mensaje = "EXCELENTE";
	}
	else if(numeroRandom > 4 && numeroRandom < 9)
	{
		mensaje = "APROBO";
	}
	else{
		mensaje = "Vamos, la proxima se puede";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN

// Bogado Jorge Rodrigo DIV E