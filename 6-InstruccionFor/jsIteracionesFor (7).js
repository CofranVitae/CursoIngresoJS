function mostrar()
{
    var numero;
    var contador=0;
    var divisor;

    numero=parseInt(prompt("Ingresa un numero."));

    while(isNaN(numero))
    {
        numero=parseInt(prompt("No es valido, ingresa denuevo."))
    }
    for(divisor=1;divisor<=numero;divisor++)
    {
        if(numero%divisor==0)
        {
            alert(divisor+" Es un numero divisor.");

            contador++;
        }
    }
    for(divisor=1;divisor>=numero;divisor--)
    {
        if(numero%divisor==0)
        {
            alert(divisor+" Es un numero divisor.")

            contador++;
        }
    }

    alert("La cantidad de numeros divisores es: "+contador);
}//FIN DE LA FUNCIÓN