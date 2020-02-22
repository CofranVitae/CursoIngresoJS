function mostrar()
{
    var n1;
    var n2;
    var resta;
    var suma;

    n1=parseInt(prompt("Ingresa un numero"));
    while(isNaN(n1))
    {
        n1=parseInt(prompt("dato invalido, Ingresa un numero"));
    }

    n2=parseInt(prompt("Ingresa otro un numero"));
    while(isNaN(n2))
    {
        n2=parseInt(prompt("dato invalido, Ingresa otro un numero"));
    }

    if(n1==n2)
    {
        alert("Los numeros ingresados son iguales: "+n1+" y "+n2);
    }
    else if(n1>n2)
    {
        resta=n1-n2;
        alert("La resta de los numeros es: "+resta);
    }
    else
    {
        suma=n1+n2;
        
        if(suma<=10)
        {
            alert("La suma de los numeros es: "+suma);
        }
        else
        {
            alert("La suma es "+suma+" y supero 10");
        }

    }

}
