function mostrar()
{
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





}
