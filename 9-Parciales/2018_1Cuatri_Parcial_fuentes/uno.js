
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
