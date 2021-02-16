/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	let sueldoBruto;
	let nroLegajo;
	let nacionalidad;

	edadIngresada = prompt("Ingrese su edad:");
	edadIngresada = parseInt(edadIngresada);
		while(edadIngresada < 18 || edadIngresada > 90)
		{
			edadIngresada = prompt("Edad no admitida. Ingrese una edad entre 18 y 90:");
			edadIngresada = parseInt(edadIngresada);
		}
	sexoIngresado = prompt("Ingrese su sexo (M o F):")
		while(sexoIngresado != "m" && sexoIngresado != "f" && sexoIngresado != "M" && sexoIngresado != "F")
		{
			sexoIngresado = prompt("Sexo no válido. Ingrese M o F:");
		}
	estadoCivilIngresado = prompt("Ingrese su estado civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos):")
	estadoCivilIngresado = parseInt(estadoCivilIngresado);
		while (estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4)
		{
			estadoCivilIngresado = prompt("Estado civil no válido. Ingrese nuevamente su estado civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos):");
			estadoCivilIngresado = parseInt(estadoCivilIngresado);
		}
	sueldoBruto = prompt("Ingrese su sueldo bruto:");
	sueldoBruto = parseInt(sueldoBruto);
		while(sueldoBruto < 8000);
		{
			sueldoBruto = prompt("Sueldo ingresado no válido. Ingrese nuevamente su sueldo bruto (mayor a 8000):");
			sueldoBruto = parseInt(sueldoBruto);
		}
	nroLegajo = prompt("Ingrese su número de legajo:")
	nroLegajo = parseInt(nroLegajo);
		while(nroLegajo < 1000);
		{
			sueldoBruto = prompt("Número de legajo ingresado no válido. Ingrese nuevamente su número de legajo (4 cifras sin ceros a la izquierda):");
			sueldoBruto = parseInt(sueldoBruto);
		}
	nacionalidad = prompt("Ingrese su nacionalidad (A para argentinos, E para extranjeros, N para nacionalizados):")
		while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N" && nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
		{
			nacionalidad = prompt("Nacionalidad ingresada no válida. Ingrese nuevamente su nacionalidad (A para argentinos, E para extranjeros, N para nacionalizados)")
		}

		document.getElementById("txtIdEdad").value = edadIngresada;
		document.getElementById("txtIdSexo").value = sexoIngresado;
		document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
		document.getElementById("txtIdSueldo").value = sexoIngresado;
		document.getElementById("txtIdLegajo").value = nroLegajo;
		document.getElementById("txtIdNacionalidad").value = nacionalidad;

}

// Bogado Jorge Rodrigo, Div E
