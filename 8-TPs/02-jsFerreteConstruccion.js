/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let cantAlambreNecesario;
    let ladosLargo;
    let ladosAncho;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    ladosLargo = largoTerreno * 2;
    ladosAncho = anchoTerreno * 2;
    cantAlambreNecesario = (ladosLargo + ladosAncho) * 3;
    
    alert("La cantidad de alambre necesaria es de " + cantAlambreNecesario.toFixed(2) + "metros.");

}
function Circulo () 
{
    let radioTerreno;
    let perimetroTerreno;
    let cantAlambreNecesario;
    const PI = 3.14;

    radioTerreno = document.getElementById("txtIdRadio").value;

    perimetroTerreno = 2 * PI * radioTerreno;

    cantAlambreNecesario = perimetroTerreno * 3

    alert("La cantidad de alambre necesaria es de " + cantAlambreNecesario.toFixed(2) + "metros.");
    
    

}
function Materiales () 
{
    let largoTerreno;
    let anchoTerreno;
    let superficieTerreno;
    let bolsasCementoNecesarias;
    let bolsasCalNecesarias;
    const BOLSASCEMENTO = 2;
    const BOLSASCAL = 3;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    superficieTerreno = largoTerreno * anchoTerreno;
    bolsasCementoNecesarias = superficieTerreno * BOLSASCEMENTO;
    bolsasCalNecesarias = superficieTerreno * BOLSASCAL;

    alert("Se necesitan " + bolsasCementoNecesarias + " bolsas de Cemento y " + bolsasCalNecesarias + " bolsas de Cal para hacer un contrapiso de " + superficieTerreno + " m2.");
    
	
}