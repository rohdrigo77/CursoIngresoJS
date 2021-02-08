function mostrar()
{

	let edad;
	let mensaje;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").nodeValue;
	edad = parseInt(edad);

	//cambio el mensaje a mostrar segun la edad
	if(edad == 15)
	{
		mensaje = "niña bonita";
	}
	else
	{
		mensaje = "Tiene " + edad + " años.";
	}

	//muestro el mensaje segun la edad
	alert(mensaje);

}//FIN DE LA FUNCIÓN