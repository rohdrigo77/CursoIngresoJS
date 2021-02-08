function mostrar()
{
  
	let edad
	let mensaje;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//informo si es adolescente si corresponde

	mensaje = "Es adolescente";

	if(edad >= 18 || edad <= 12)
	{
		mensaje = "No es adolescente.";
	}


	alert(mensaje);


}//FIN DE LA FUNCIÓN

// Bogado Jorge Rodrigo