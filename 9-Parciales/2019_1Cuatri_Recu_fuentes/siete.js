function mostrar()
{
    var nombre;
    var cantidadPersonas;
    var cantidadDias;
    var formaDePago;
    var masPersonas;
    var cantPersonasMasDias;
    var masDias;
    var acumuladorPromedio=0;
    var promedioDias;
    var respuesta;
    var i=0;
    var contadorEfectivo=0;
    var contadorTarjeta=0;
    var contadorQR=0;
    var formadePagoMasUsada;

    do{
        nombre=prompt("Ingrese nombre de cliente").toLowerCase();
        while(nombre<"a" || nombre>"z" || nombre.length==0)
        {
            nombre=prompt("volve a ingresar. Ingrese nombre de cliente").toLowerCase();
        }

        cantidadPersonas=parseInt(prompt("Ingrese la cantidad de personas a hospedarse"));
        while(isNaN(cantidadPersonas))
        {
            cantidadPersonas=parseInt(prompt("dato invalido. Ingrese la cantidad de personas a hospedarse"));
        }

        cantidadDias=parseInt(prompt("Ingrese la cantidad de dias a hosperadse"));
        while(isNaN(cantidadDias))
        {
            cantidadDias=parseInt(prompt("dato invalido. Ingrese la cantidad de dias a hosperadse"));
        }

        formaDePago=prompt("Ingrese una forma de pago (efectivo, tarjeta o QR").toLowerCase();
        while(formaDePago!="efectivo" && formaDePago!="tarjeta" && formaDePago!="qr")
        {
            formaDePago=prompt("Ingrese una forma de pago (efectivo, tarjeta o QR").toLowerCase();
        }


        if(i==0 || cantidadPersonas>masPersonas)
        {
            masPersonas=cantidadPersonas;
        }
        
        if(i==0 || cantidadDias>masDias)
        {
            masDias=cantidadDias;
            cantPersonasMasDias=cantidadPersonas;
        }

        switch(formaDePago)
        {
            case "efectivo":
                {
                    contadorEfectivo++;
                    break;
                }
            case "tarjeta":
                {
                    contadorTarjeta++;
                    break;
                }
            case "qr":
                {
                    contadorQR++;
                    break;
                }
        }

        acumuladorPromedio+=cantidadDias;
        i++;


        respuesta=prompt("Quiere seguir ingresando?").toLowerCase();
    }while(respuesta=="si" || respuesta=="s");

    if(contadorEfectivo>contadorQR && contadorEfectivo>contadorTarjeta)
    {
        formadePagoMasUsada="Efectivo";
    }
    if(contadorQR>contadorEfectivo && contadorQR>contadorTarjeta)
    {
        formadePagoMasUsada="QR";
    }
    if(contadorTarjeta>contadorQR && contadorTarjeta>contadorEfectivo)
    {
        formadePagoMasUsada="Tarjeta";
    }
    
    
   
    if(contadorEfectivo==contadorQR)
    {
        formadePagoMasUsada="Efectivo y QR";
    }
    if(contadorEfectivo==contadorTarjeta)
    {
        formadePagoMasUsada="Efectivo y Tarjeta";
    }
    if(contadorTarjeta==contadorQR)
    {
        formadePagoMasUsada="Tarjeta y QR";
    }



    if(contadorEfectivo==contadorQR && contadorEfectivo==contadorTarjeta)
    {
        formadePagoMasUsada="Efectivo, QR y tarjeta por igual";
    }

    promedioDias=acumuladorPromedio/i;

    document.write("El huesped que trajo mas personas es: "+masPersonas+"</br>");

    document.write("La cantidad de personas que se quedaron mas dias fueron: "+cantPersonasMasDias+"</br>");

    document.write("La forma de pago mas utiliada es: "+formadePagoMasUsada+"</br>");

    document.write("El promedio de cantidad de dias es: "+promedioDias)

}