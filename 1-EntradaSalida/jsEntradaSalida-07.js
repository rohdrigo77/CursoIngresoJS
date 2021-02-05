/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let resultadoSuma;
	let mensajeSuma;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resultadoSuma = num1 + num2
	mensajeSuma = "El resultado de la suma es " + resultadoSuma;


	alert(mensajeSuma);	
}

function restar()
{
	let num1;
	let num2;
	let resultadoResta;
	let mensajeResta;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resultadoResta = num1 - num2
	mensajeResta = "El resultado de la resta es " + resultadoResta;
	
	
	alert(mensajeResta);	
	
}

function multiplicar()
{
	let num1;
	let num2;
	let resultadoMulti;
	let mensajeMulti;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resultadoMulti = num1 * num2
	mensajeMulti = "El resultado de la resta es " + resultadoMulti;
	
	
	alert(mensajeMulti);	
	
}

function dividir()
{
	let num1;
	let num2;
	let resultadoDiv;
	let mensajeDiv;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resultadoDiv = num1 / num2
	mensajeDiv = "El resultado de la resta es " + resultadoDiv;
	
	
	alert(mensajeDiv);	
	
}

