/*

Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

*/

function mostrar()
{
  
	let edad
	let mensaje;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//informo si es adolescente si corresponde

	mensaje = "No es adolescente";

	if(edad < 18 && edad > 12)
	{
		mensaje = "Es adolescente.";
	}


	alert(mensaje);


}//FIN DE LA FUNCIÓN

// Bogado Jorge Rodrigo