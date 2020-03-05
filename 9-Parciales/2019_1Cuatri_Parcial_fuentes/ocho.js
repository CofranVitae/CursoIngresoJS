function mostrar()
{
    var letra;
    var numero;
    var respuesta;

    var contPares=0;
    var contImpares=0;
    var contCeros=0;

    var acumpromPos=0;
    var contadorPos=0;
    var promedio;

    var acumNeg=0;

    var numMax;
    var letraMax;
    var numMin;
    var letraMin;


    do
    {
        letra=prompt("Ingrese una letra").toLowerCase();
        while(letra<"a" || letra>"z")
        {
            letra=prompt("Ingrese una letra").toLowerCase();
        }

        numero=parseInt(prompt("ingrese un numero entre -100 y 100"));
        while(isNaN(numero) || numero<-100 || numero >100)
        {
            numero=parseInt(prompt("ingrese un numero entre -100 y 100"));
        }
        
        if(contadorPos==0 || numero>numMax)
        {
            numMax=numero;
            letraMax=letra;
        }
        if(contadorPos==0 || numero<numMin)
        {
            numMin=numero;
            letraMin=letra;
        }

        if(numero%2==0)
        {
            contPares++;
        }else{
            contImpares++;
        }

        if(numero==0)
        {
            contCeros++;
        }
        else if(numero<0){
            acumNeg+=numero;

        }
        else{
            acumpromPos+=numero;
            contadorPos++;
        }

        respuesta=prompt("Queres seguir ingresando?");

    }while(respuesta=="si" || respuesta=="s");

    promedio=acumpromPos/contadorPos;

    document.write("la cantidad de paresd es: " +contPares+"</br>");
    document.write("la cantidad de impares es: "+contImpares+"</br>");
    document.write("la cantidad de ceros es: "+contCeros+"</br>");
    document.write("El promedio de los positivos es: "+promedio+"</br>");
    document.write("la suma de los negativos es: "+acumNeg+"</br>");
    document.write("El numedo y la letra maximo son: "+numMax+" y "+letraMax+"</br>");
    document.write("El numero y la letra minimos son: "+numMin+" y "+letraMin);
}
