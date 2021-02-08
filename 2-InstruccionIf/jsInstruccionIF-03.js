function mostrar()
{

	let edad;
	let mensaje;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//cambio el mensaje a mostrar segun la edad
	if(edad > 17)
	{
		mensaje = "Es mayor de edad.";
	}
	else if(edad < 18)
	{
		mensaje = "Es menor de edad.";
	}

	//muestro el mensaje segun la edad
	alert(mensaje);

}//FIN DE LA FUNCIÓN