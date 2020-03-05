function mostrar()
{

    var numero;
    var divisorPos;
    var contador=0;
    var divisorNeg;

    numero=parseInt(prompt("Ingresa un numero"));
    while(isNaN(numero))
    {
        numero=parseInt(prompt("Ingresa un numero"));
    }

    for(divisorPos=1;divisorPos<=numero;divisorPos++)
    {
        if(numero%divisorPos==0)
        {
            contador++;
        }
    }

    for(divisorNeg=-1;divisorNeg>=numero;divisorNeg--)
    {
        if(numero%divisorNeg==0)
        {
            contador++;
        }
    }

    if(contador==2)
    {
        alert("El numero es primo");
    }
    else{
        alert("El numero no es primo");
    }

    


}//FIN DE LA FUNCIÓN