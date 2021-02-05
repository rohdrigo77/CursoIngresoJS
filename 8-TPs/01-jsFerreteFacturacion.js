/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    let precio1;
    let precio2;
    let precio3;
    let sumaPrecios;
    let mensaje;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    sumaPrecios = precio1 + precio2 + precio3;

    mensaje="La suma total de los precios es de " + sumaPrecios.toFixed(2) + " pesos.";


    alert(mensaje);
	
}

function Promedio () 
{

    let precio1;
    let precio2;
    let precio3;
    let precioTotal
    let promedioPrecios;
    let mensaje;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    precioTotal = precio1 + precio2 + precio3;
    promedioPrecios = precioTotal / 3;

    mensaje="El promedio total de los precios es de " + promedioPrecios.toFixed(2) + " pesos.";


    alert(mensaje);

}
function PrecioFinal () 
{

    
    let precio1;
    let precio2;
    let precio3;
    let precioTotal
    let ivaDePrecioTotal;
    let precioTotalConIva;
    let precioFinal;
    let mensaje;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;


    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    precioTotal = precio1 + precio2 + precio3;
    ivaDePrecioTotal = precioTotal * 21 / 100;
    precioTotalConIva = precioTotal + ivaDePrecioTotal;
    precioFinal = precioTotalConIva;

    mensaje="El precio total de los precios con IVA incluido es de " + precioFinal.toFixed(2) + " pesos.";


    alert(mensaje);

	
}