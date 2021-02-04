/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
//function mostrar()
//{	
//	let nombre;
//	let edad;
	
//	nombre = document.getElementById("txtIdNombre").value;
//	edad = document.getElementById("txtIdEdad").value;
	
//	alert("Ud se llama " + nombre + "y tiene " + edad + "años.");

//}

// Bogado Jorge Rodrigo


/*
bis : 
 se debe mostrar un mensaje :

 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan





*/

//SOLUCION 1 SIN TOCAR CODIGO HTML

function mostrar()
{	
	let nombre;
    let edad;
    let apellido;
	
	nombre = document.getElementById("txtIdNombre").value;
    edad = document.getElementById("txtIdEdad").value;
    apellido = prompt("Su Apellido");
    
	alert(apellido + ", usted se llama " + nombre + " y tiene " + edad + " años.");

}

//SOLUCION 2 TOCANDO CODIGO HTML

//function mostrar()
//{	
//	let nombre;
  //  let edad;
    //let apellido;
	
	//nombre = document.getElementById("txtIdNombre").value;
	//apellido = document.getElementById("txtIdApellido").value;
	//edad = document.getElementById("txtIdEdad").value;

	
	//mensaje = apellido + ", usted se llama " + nombre + " y tiene " + edad + " años.";

	//alert(mensaje);

//}

// Bogado Jorge Rodrigo

