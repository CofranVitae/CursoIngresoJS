
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    
    ancho=parseInt(prompt("Ingrese el ancho de un rectangulo"));
    while(isNaN(ancho)||ancho<=0)
    {
        ancho=parseInt(prompt("Por favor, ingrese un valor numerico natural para el ancho del rectangulo."));
    }

    largo=parseInt(prompt("Ingrese el largo de un rectangulo"));
    while(isNaN(largo)||largo<=0)
    {
        largo=parseInt(prompt("Por favor, ingrese un valor numerico natural para el largo del rectangulo."));
    }

    perimetro=(largo+ancho)*2;

    alert("El perimetro del rectangulo es: "+perimetro);

}
var letra;
var numero;
var respuesta;
var cantImPares=0;
var cantPares=0;
var cantCeros=0;
var promedio;
var letMax;
var letMin;
var maximo=0;
var minimo;
var pos=0;
var neg=0;
var i=0;

do
{
    letra=prompt("ingrese una letra");
    while(!(isNaN(letra)) || letra.length==0)
    {
        letra=prompt("dato invalido, ingrese una letra");
    }

    numero=parseInt(prompt("Ingrese un numero de -100 a 100"));
    while(numero<-100 || numero>100 || isNaN(numero))
    {
        numero=parseInt(prompt("dato invalido, ingrese un numero de -100 a 100"))
    }

    if(numero%2==0)
    {
        cantPares++;
    }
        else
        {
            cantImPares++;
        }

    if(numero==0)
    {
        cantCeros++;
    }
        else if(numero>0)
        {
            pos+=numero;
        }
        else
        {
            neg+=numero;
        }
    
    if(maximo==0)
    {
        maximo=numero;
        minimo=numero;
        letMin=letra;
        letMax=letra;
    }
    
    if(numero>maximo)
    {
        maximo=numero;
        letMax=letra;
    }

    if(numero<minimo)
    {
        minimo=numero;
        letMin=letra;
    }
    
    respuesta=prompt("quiere seguir ingresando?");

    i++;
    
}while(respuesta=="si");

promedio=pos/i;

document.write("la cantidad de numeros pares es: "+cantPares+"</br>");
document.write("la cantidad de numeros impares es: "+cantImPares+"</br>");
document.write("la cantidad de ceros es: "+cantCeros+"</br>");
document.write("el promedio de los numeros positivos es: "+promedio+"</br>");
document.write("la suma de los negativos es: "+neg+"</br>");
document.write("el numero y la letra maximos son: "+maximo+" "+letMax+"<br/>");
document.write("el numero y la letra minimos son: "+minimo+" "+letMin);

var marca;
    var peso;
    var temp;
    var respuesta;
    var acum=0;
    var cantTemp=0;
    var MaxPeso;
    var marcapesada;
    var MinPeso;
    var cant0º=0;
    var promedio=0;
    var i=0;
    
    do
    {
        marca=prompt("Ingrese una marca de un producto");
        while(marca.length == 0 || marca != /^[A-Z]+$/i)
        {
            marca=prompt("Dato invalido. Ingrese una marca de un producto"); 
        }
        

        peso=parseInt(prompt("Ingrese un peso entre 1 y 100 Kg"));
        while(isNaN(peso) || peso<1 || peso>100)
        {
            peso=parseInt(prompt("Dato invalido. Ingrese un peso entre 1 y 100 Kg"));
        }
        
        temp=parseInt(prompt("Ingrese una temperatura de almacenamiento entre -30 y 30 ºC"));
        while(isNaN(temp) || temp<-30 || temp>30)
        {
            temp=parseInt(prompt("dato invalido. Ingrese una temperatura de almacenamiento entre -30 y 30 ºC"));
        }

        
        if(temp%2==0)
        {
            cantTemp++;
        }

        if(i==0)
        {
            MaxPeso=peso;
            marcapesada=marca;
            MinPeso=peso;
            i++;
        }
        else
        {
            if(peso>MaxPeso)
            {
                MaxPeso=peso;
                marcapesada=marca;
            }
            if(peso<MinPeso)
            {
                MinPeso=peso;
            }
        }

        if(temp<0)
        {
            cant0º++;
        }

        acum=acum+peso;
        promedio++;
        
        respuesta=prompt("Quiere seguir ingresando productos?");

    }while(respuesta=="si");

    promedio=acum/promedio;

    document.write("La cantidad de temperaturas pares es "+cantTemp+"</br>");
    document.write("la marca del producto mas pesado es "+marcapesada+" con un peso de "+MaxPeso+"</br>");
    document.write("La cantidad de productos que se conservan a menos de 0ºC "+cant0º+"</br>");
    document.write("El promedio de los pesos es "+promedio+"</br>");
    document.write("El peso maximo es "+MaxPeso+"</br>");
    document.write("El peso minimo ingresado es "+MinPeso);