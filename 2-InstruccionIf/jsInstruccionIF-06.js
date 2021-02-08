function mostrar()
{
  
	let edad;
	let mensaje;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//informo si es adolescente si corresponde



	if(edad > 17)
	{
		mensaje = "Es mayor de edad.";
	}

	else if(edad < 18 && edad > 12)
	{
		mensaje = "Es adolescente.";
	}

	else
	{
		mensaje = "Es niño."
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN

// Bogado Jorge Rodrigo