function mostrar()
{
    var contador;
    var contador2=0;
    var numero;

    numero=parseInt(prompt("Ingresa un numero."));

    for(contador=1;contador<=numero;contador++)
    {
        if(contador%2==0)
        {
            alert(contador+" Es un numero par.");

            contador2++;
        }
    }

    alert("ingresaste "+contador2+" numeros pares.");



}//FIN DE LA FUNCIÓN