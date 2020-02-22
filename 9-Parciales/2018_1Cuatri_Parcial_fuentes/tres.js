function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio=parseInt(prompt("Ingresa un precio"));
    while(isNaN(precio))
    {
        precio=parseInt(prompt("dato invalido, ingresa nuevamente el precio"));
    }

    descuento=parseInt(prompt("Ingresa un numero para descuento"));
    while(isNaN(descuento))
    {
        descuento=parseInt(prompt("Dato invalido, ingresa nuevamente el descuento"));
    }

    precioFinal=parseInt(precio-(precio*descuento/100));

    if(precioFinal<=0)
    {
        document.getElementById("elPrecioFinal").value="su precio final es "+precioFinal;
        
        alert("felicidades! selo lleva gratis!");
    }
    else
    {
        document.getElementById("elPrecioFinal").value="su precio final es "+precioFinal;
    }

}
