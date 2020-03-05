function mostrar()
{
    var letra;
    var numero;
    var respuesta;

    var contpares=0;
    var contImpares=0;
    var contceros=0;

    var ipos=0;
    var acumPos=0;
    var promedio;

    var AcumNeg=0;

    var letraMax;
    var numMax;
    var letraMin;
    var numMin;
    var flag=0;

    do
    {
        letra=prompt("Ingresa una letra").toLowerCase();
        while(letra<"a" || letra>"z")
        {
            letra=prompt("Ingresa una letra").toLowerCase();
        }

        numero=parseInt(prompt("Ingresa un numero entre -100 y 100"));
        while(isNaN(numero) || numero<-100 || numero>100)
        {
            numero=parseInt(prompt("Ingresa un numero entre -100 y 100"));
        }

        if(numero%2==0)
        {
            contpares++;
        }else{
            contImpares++;
        }

        if(numero==0)
        {
            contceros++;
        }else if(numero>0){
            acumPos+=numero;
            ipos++;
        }else{
            AcumNeg+=numero;
        }

        if(flag==0 || numero<numMin)
        {
            numMin=numero;
            letraMin=letra;
        }
        if(flag==0 || numero>numMax)
        {
            numMax=numero;
            letraMax=letra;
        }

        flag=1;

        respuesta=prompt("Queres seguir ingresando?");
    }while(respuesta=="si" || respuesta=="s");

    promedio=acumPos/ipos;
document.write("a La cantidad de números pares "+contpares+"</br>");
document.write("b La cantidad de números impares. "+contImpares+"</br>");
document.write("c La cantidad de ceros. "+contceros+"</br>");
document.write("d El promedio de todos los números positivos ingresados. "+promedio+"</br>");
document.write("e La suma de todos los números negativos. "+AcumNeg+"</br>");
document.write("f El número y la letra del máximo "+numMax+" "+letraMax+" y el mínimo. "+numMin+" "+letraMin);
}
