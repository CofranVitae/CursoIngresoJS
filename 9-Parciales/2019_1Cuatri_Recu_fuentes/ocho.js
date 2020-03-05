function mostrar()
{
    var color;
    var precio;

    var cantRojos=0;
    var cantRojosMasDe5000=0;
    var cantMenos5000=0;
    var acumPromedio=0;
    var promedio;
    var precioMayor;
    var colorMayor;
    var i=0;

    var respuesta;

    do{
        color=prompt("Ingrese un color (rojo, verde o amarillo).").toLowerCase();
        while(color!="rojo" && color!="verde" && color!="amarillo")
        {
            color=prompt("Dato invalido. Ingrese un color (rojo, verde o amarillo.").toLowerCase();
        }

        precio=parseInt(prompt("Ingrese un precio entre 0 y 10000"));
        while(precio<0 || precio>10000 || isNaN(precio))
        {
            precio=parseInt(prompt("Dato invalido, Ingrese un precio entre 0 y 10000"));
        }

        if(color=="rojo")
        {
            cantRojos++;
            
            if(precio>5000)
            {
            cantRojosMasDe5000++;
            }
        }

        if(precio<5000)
        {
            cantMenos5000++;
        }


        if(i==0 || precio>precioMayor)
        {
            precioMayor=precio;
            colorMayor=color;
        }

        acumPromedio+=precio;
        i++;


        respuesta=prompt("Quiere seguir ingresando?");

    }while(respuesta=="si" || respuesta=="s");

    promedio=acumPromedio/i;

    document.write("La cantidad de autos rojos es: "+cantRojos+"</br>");
    document.write("La cantidad de autos rojos con precio mayor a 5000 es: "+cantRojosMasDe5000+"</br>");
    document.write("La cantidad de vehiculos cuyo precio es inferior a 5000 es: "+cantMenos5000+"</br>");
    document.write("el promedio total de los vehiculos es: "+promedio+"</br>");
    document.write("El precio mayor es: "+precioMayor+" y el color de ese vehiculo es: "+colorMayor);
}
