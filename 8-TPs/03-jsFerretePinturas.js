/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

    let tempFahrenheit;
    let tempCentigrados;
    let convertirFahrenheitACentigrados;

    tempFahrenheit = document.getElementById("txtIdTemperatura").value;

    tempFahrenheit = parseFloat(tempFahrenheit);
    
    convertirFahrenheitACentigrados = (tempFahrenheit - 32) * (5/9);

    tempCentigrados = convertirFahrenheitACentigrados;

    tempCentigrados = parseFloat(tempCentigrados);
    
    alert(tempFahrenheit + " Fahrenheit son " + tempCentigrados.toFixed(1) + " Centígrados.");
}

function CentigradosFahrenheit () 
{
    let tempFahrenheit;
    let tempCentigrados;
    let convertirCentigradosAFahrenheit;

    tempCentigrados = document.getElementById("txtIdTemperatura").value;

    tempCentigrados = parseFloat(tempCentigrados);
    
    convertirCentigradosAFahrenheit = (tempCentigrados * (9/5)) + 32;

    tempFahrenheit = convertirCentigradosAFahrenheit;

    tempFahrenheit = parseFloat(tempFahrenheit);
    
    alert(tempCentigrados + " Centígrados son " + tempFahrenheit.toFixed(1) + " Fahrenheit.");

}
