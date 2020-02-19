/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var farenheit;
    var centigrados;

    farenheit=parseInt(document.getElementById("Temperatura").value);

    centigrados=(farenheit-32)*5/9;

    alert("La temperatura es "+centigrados+" grados centigrados.");
}

function CentigradosFahrenheit () 
{
    var centigrados;
    var farenheit;

    centigrados=parseInt(document.getElementById("Temperatura").value);

    farenheit=(centigrados*9/5)+32;


    alert("La temperatura es "+farenheit+" grados farenheit.");

}
