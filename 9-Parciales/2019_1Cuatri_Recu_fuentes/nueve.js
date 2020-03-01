function mostrar()
{
    var marca;
    var kilosPorbolsa;
    var cantidadBolsas;
    var importe;
    var contadorPeso=0;
    var pesoTotal;

    var marcaMasKilos;
    var kilosMarca;
    var marcaMasBolsas;
    var marcaMayorimporte;
    var importeMenosPesado;
    var marcaMenosPesada
    var PesoMinimo;
    var flag=0;
    var flag2=0;

    var respuesta;

    do{

        marca=prompt("ingresa una marca de alimento para perros.").toLowerCase();
        while(!(isNaN(marca)) || marca<"a" || marca>"z")
        {
            marca=prompt("dato invalido. ingresa una marca de alimento para perros.").toLowerCase();
        }

        cantidadBolsas=parseInt(prompt("ingrese la cantidad de bolsas que quiere añadir al contenedor."));
        while(isNaN(cantidadBolsas))
        {
            cantidadBolsas=parseInt(prompt("dato invalido. ingrese la cantidad de bolsas que quiere añadir al contenedor."));   
        }

        kilosPorbolsa=parseInt(prompt("ingrese el peso de cada bolsa que ingreso"));
        while(isNaN(kilosPorbolsa) || kilosPorbolsa>=1000)
        {
            kilosPorbolsa=parseInt(prompt("dato invalido. puede ser que el peso supere la capacidad maxima. ingrese el peso de cada bolsa que ingreso"));
        }

        importe=parseInt(prompt("Ingrese el importe por bolsa"));
        while(isNaN(importe))
        {
            importe=parseInt(prompt("dato invalido. Ingrese el importe por bolsa"));
        }

        pesoTotal=kilosPorbolsa*cantidadBolsas;

        if(flag2==0 || pesoTotal>kilosMarca)
        {
            kilosMarca=pesoTotal;
            marcaMasKilos=marca;
        }
        else if(marca==marcaMasKilos)
        {
            kilosMarca+=pesoTotal;
        }
        
        contadorPeso=contadorPeso+pesoTotal;
        if(contadorPeso>=1000)
        {
            flag=1;
        }

        respuesta=prompt("Quiere seguir ingresando?");
    }while(flag==0 && respuesta=="si");

    alert("Se supero el limite de capacidad.");

    alert(marcaMasKilos);
}
