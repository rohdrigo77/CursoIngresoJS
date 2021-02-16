/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 



 // EJERCICIO A + B

function CalcularPrecio () 
{
 	let lamparitas;
    let marca;
    let porcentajeDescuento;
    let descuentoEnPesos;
    let precioConDescuento;
    let precioTotalLamparitas;
    let precioFinalConIngBrut;
    let porcentajeConIngBrut;

    lamparitas = document.getElementById("txtIdCantidad").value;
    lamparitas = parseInt(lamparitas);
    marca = document.getElementById("Marca").value;

    if(lamparitas >= 6)
    {
        porcentajeDescuento = 50;
    }
    else if(lamparitas == 5)
    {
        if(marca == "ArgentinaLuz")
        {
            porcentajeDescuento = 40;
        }
        else
        {
            porcentajeDescuento = 30;  
        }
    }
    else if(lamparitas == 4)
    {
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            porcentajeDescuento = 25;
        }
        else
        {
            porcentajeDescuento = 20;  
        }
    }
    else if(lamparitas == 3)
    {
        if(marca == "ArgentinaLuz")
        {
            porcentajeDescuento = 15;
        }
        else if(marca == "FelipeLamparas")
        {
            porcentajeDescuento = 10;  
        }
        else
        {
            porcentajeDescuento = 5;
        }
    }
    else
    {
        porcentajeDescuento = 0;
    }

    porcentajeDescuento = parseInt(porcentajeDescuento);

    precioTotalLamparitas = 35 * lamparitas;
    precioTotalLamparitas = parseInt(precioTotalLamparitas);

    descuentoEnPesos = precioTotalLamparitas * porcentajeDescuento / 100;
    descuentoEnPesos = parseInt(descuentoEnPesos);

    precioConDescuento = precioTotalLamparitas - descuentoEnPesos;
    precioConDescuento = parseInt(precioConDescuento);

    if(precioConDescuento > 120)
    {
        porcentajeConIngBrut = precioConDescuento * 10 /100;
        porcentajeConIngBrut = parseInt(porcentajeConIngBrut);
        precioFinalConIngBrut = porcentajeConIngBrut;
        precioFinalConIngBrut = precioConDescuento + precioFinalConIngBrut;
        precioFinalConIngBrut = parseInt(precioFinalConIngBrut);
        


        document.getElementById("txtIdprecioDescuento").value = "Usted pago $" + porcentajeConIngBrut + " de IIBB, siendo un total de $" + precioFinalConIngBrut;


    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = "$" + precioConDescuento;
    }


}   

// Bogado Jorge Rodrigo, Division E



function CalcularPrecio () 
{
 	let lamparitas;
    let marca;
    let porcentajeDescuento;
    let descuentoEnPesos;
    let precioConDescuento;
    let precioTotalLamparitas;
    let precioFinalConIngBrut;
    let porcentajeConIngBrut;

    lamparitas = document.getElementById("txtIdCantidad").value;
    lamparitas = parseInt(lamparitas);
    marca = document.getElementById("Marca").value;

    switch(lamparitas)
    {
        case 5 :
          if(marca == "ArgentinaLuz")
          {
            porcentajeDescuento = 40;
          }
          else
          {
            porcentajeDescuento = 30;  
          }
          break;
        case 4 :
          if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
          {
              porcentajeDescuento = 25;
          }
          else
          {
              porcentajeDescuento = 20;  
          }
          break;
        case 3 :
          if(marca == "ArgentinaLuz")
          {
            porcentajeDescuento = 15;
          }
          else if(marca == "FelipeLamparas")
          {
            porcentajeDescuento = 10;  
          }
          else
          {
            porcentajeDescuento = 5;
          }
          break;
        case 2 :
        case 1 :
        case 0 :
          porcentajeDescuento = 0; 
          break;
        default :
          porcentajeDescuento = 50; 
          break;   
    }


    porcentajeDescuento = parseInt(porcentajeDescuento);

    precioTotalLamparitas = 35 * lamparitas;
    precioTotalLamparitas = parseInt(precioTotalLamparitas);

    descuentoEnPesos = precioTotalLamparitas * porcentajeDescuento / 100;
    descuentoEnPesos = parseInt(descuentoEnPesos);

    precioConDescuento = precioTotalLamparitas - descuentoEnPesos;
    precioConDescuento = parseInt(precioConDescuento);

    if(precioConDescuento > 120)
    {
        porcentajeConIngBrut = precioConDescuento * 10 /100;
        porcentajeConIngBrut = parseFloat(porcentajeConIngBrut);
        precioFinalConIngBrut = porcentajeConIngBrut;
        precioFinalConIngBrut = precioConDescuento + precioFinalConIngBrut;
        precioFinalConIngBrut = parseFloat(precioFinalConIngBrut.toFixed(2));
        


        document.getElementById("txtIdprecioDescuento").value = "Usted pago $" + porcentajeConIngBrut + " de IIBB, siendo un total de $" + precioFinalConIngBrut;


    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = "$" + precioConDescuento;
    }


}  

// Bogado Jorge Rodrigo, Division E
*/

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 


function CalcularPrecio () 
{
 	let lamparitas;
    let marca;
    let porcentajeDescuento;
    let descuentoEnPesos;
    let precioConDescuento;
    let precioTotalLamparitas;
    let precioFinalConIngBrut;
    let porcentajeConIngBrut;

    lamparitas = document.getElementById("txtIdCantidad").value;
    lamparitas = parseInt(lamparitas);
    marca = document.getElementById("Marca").value;

    switch(lamparitas)
    {
        case 5 :
          switch(marca)
          { 
            case "ArgentinaLuz" :
              porcentajeDescuento = 40;
              break;
            default :
              porcentajeDescuento = 30;
              break;
          }
          break;
        case 4 :
          switch(marca)
          {
            case "ArgentinaLuz" :
            case "FelipeLamparas" :
              porcentajeDescuento = 25;
              break;
            default :
              porcentajeDescuento = 20; 
              break;
          }
          break;
        case 3 :
          switch(marca)
          {
            case "ArgentinaLuz" :
              porcentajeDescuento = 15; 
              break;
            case "FelipeLamparas" :
              porcentajeDescuento = 10; 
              break;
            default :
              porcentajeDescuento = 5; 
              break;                 
          }
          break;
        case 2 :
        case 1 :
        case 0 :
          porcentajeDescuento = 0; 
          break;
        default :
          porcentajeDescuento = 50; 
          break;   
    }


    porcentajeDescuento = parseInt(porcentajeDescuento);

    precioTotalLamparitas = 35 * lamparitas;
    precioTotalLamparitas = parseInt(precioTotalLamparitas);

    descuentoEnPesos = precioTotalLamparitas * porcentajeDescuento / 100;
    descuentoEnPesos = parseInt(descuentoEnPesos);

    precioConDescuento = precioTotalLamparitas - descuentoEnPesos;
    precioConDescuento = parseInt(precioConDescuento);

    if(precioConDescuento > 120)
    {
        porcentajeConIngBrut = precioConDescuento * 10 /100;
        porcentajeConIngBrut = parseFloat(porcentajeConIngBrut);
        precioFinalConIngBrut = porcentajeConIngBrut;
        precioFinalConIngBrut = precioConDescuento + precioFinalConIngBrut;
        precioFinalConIngBrut = parseFloat(precioFinalConIngBrut.toFixed(2));
        


        document.getElementById("txtIdprecioDescuento").value = "Usted pago $" + porcentajeConIngBrut + " de IIBB, siendo un total de $" + precioFinalConIngBrut;


    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = "$" + precioConDescuento;
    }


}  

// Bogado Jorge Rodrigo, Division E



function CalcularPrecio () 
{
 	let lamparitas;
    let marca;
    let porcentajeDescuento;
    let descuentoEnPesos;
    let precioConDescuento;
    let precioTotalLamparitas;
    let precioFinalConIngBrut;
    let porcentajeConIngBrut;

    lamparitas = document.getElementById("txtIdCantidad").value;
    lamparitas = parseInt(lamparitas);
    marca = document.getElementById("Marca").value;

    switch(lamparitas)
    {
        case 5 :
          switch(marca)
          { 
            case "ArgentinaLuz" :
              porcentajeDescuento = 40;
              break;
            default :
              porcentajeDescuento = 30;
              break;
          }
          break;
        case 4 :
          switch(marca)
          {
            case "ArgentinaLuz" :
            case "FelipeLamparas" :
              porcentajeDescuento = 25;
              break;
            default :
              porcentajeDescuento = 20; 
              break;
          }
          break;
        case 3 :
          switch(marca)
          {
            case "ArgentinaLuz" :
              porcentajeDescuento = 15; 
              break;
            case "FelipeLamparas" :
              porcentajeDescuento = 10; 
              break;
            default :
              porcentajeDescuento = 5; 
              break;                 
          }
          break;
        case 2 :
        case 1 :
        case 0 :
          porcentajeDescuento = 0; 
          break;
        default :
          porcentajeDescuento = 50; 
          break;   
    }


    porcentajeDescuento = parseInt(porcentajeDescuento);

    precioTotalLamparitas = 35 * lamparitas;
    precioTotalLamparitas = parseInt(precioTotalLamparitas);

    descuentoEnPesos = precioTotalLamparitas * porcentajeDescuento / 100;
    descuentoEnPesos = parseInt(descuentoEnPesos);

    precioConDescuento = precioTotalLamparitas - descuentoEnPesos;
    precioConDescuento = parseInt(precioConDescuento);

    if(precioConDescuento > 120)
    {
        porcentajeConIngBrut = precioConDescuento * 10 /100;
        porcentajeConIngBrut = parseFloat(porcentajeConIngBrut);
        precioFinalConIngBrut = porcentajeConIngBrut;
        precioFinalConIngBrut = precioConDescuento + precioFinalConIngBrut;
        precioFinalConIngBrut = parseFloat(precioFinalConIngBrut.toFixed(2));
        


        document.getElementById("txtIdprecioDescuento").value = "Usted pago $" + porcentajeConIngBrut + " de IIBB, siendo un total de $" + precioFinalConIngBrut;


    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = "$" + precioConDescuento;
    }


}  

// Bogado Jorge Rodrigo, Division E
  
*/
function CalcularPrecio () 
{
 	let lamparitas;
    let marca;
    let porcentajeDescuento;
    let descuentoEnPesos;
    let precioConDescuento;
    let precioTotalLamparitas;
    let precioFinalConIngBrut;
    let porcentajeConIngBrut;

    lamparitas = document.getElementById("txtIdCantidad").value;
    lamparitas = parseInt(lamparitas);
    marca = document.getElementById("Marca").value;

    if(lamparitas >= 6)
    {
        porcentajeDescuento = 50;
    }
    else if(lamparitas == 5)
    {
      switch(marca)
        { 
          case "ArgentinaLuz" :
            porcentajeDescuento = 40;
            break;
          default :
            porcentajeDescuento = 30;
            break;
        }
    }
    else if(lamparitas == 4)
    {
      switch(marca)
          {
            case "ArgentinaLuz" :
            case "FelipeLamparas" :
              porcentajeDescuento = 25;
              break;
            default :
              porcentajeDescuento = 20; 
              break;
          }
    }
    else if(lamparitas == 3)
    {
      switch(marca)
        {
          case "ArgentinaLuz" :
            porcentajeDescuento = 15; 
            break;
          case "FelipeLamparas" :
            porcentajeDescuento = 10; 
            break;
          default :
            porcentajeDescuento = 5; 
            break;                 
        }
    }
    else
    {
        porcentajeDescuento = 0;
    }

    porcentajeDescuento = parseInt(porcentajeDescuento);

    precioTotalLamparitas = 35 * lamparitas;
    precioTotalLamparitas = parseInt(precioTotalLamparitas);

    descuentoEnPesos = precioTotalLamparitas * porcentajeDescuento / 100;
    descuentoEnPesos = parseInt(descuentoEnPesos);

    precioConDescuento = precioTotalLamparitas - descuentoEnPesos;
    precioConDescuento = parseInt(precioConDescuento);

    if(precioConDescuento > 120)
    {
        porcentajeConIngBrut = precioConDescuento * 10 /100;
        porcentajeConIngBrut = parseInt(porcentajeConIngBrut);
        precioFinalConIngBrut = porcentajeConIngBrut;
        precioFinalConIngBrut = precioConDescuento + precioFinalConIngBrut;
        precioFinalConIngBrut = parseInt(precioFinalConIngBrut);
        


        document.getElementById("txtIdprecioDescuento").value = "Usted pago $" + porcentajeConIngBrut + " de IIBB, siendo un total de $" + precioFinalConIngBrut;


    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = "$" + precioConDescuento;
    }


}   

// Bogado Jorge Rodrigo, Division E
