/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo;
	let aumento
	let sueldoAumentado;
//	let mensajeResultado;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseFloat(sueldo);
	aumento = sueldo * 10 / 100;
	sueldoAumentado = sueldo + aumento;
	mensajeResultado = "Su nuevo sueldo con 10% de aumento es de " + sueldoAumentado + " pesos.";
	document.getElementById("txtIdResultado").value = mensajeResultado;
}
