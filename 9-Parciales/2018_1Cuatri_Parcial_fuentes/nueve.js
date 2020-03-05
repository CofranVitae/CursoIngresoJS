function mostrar()
{
    /*var marca;
    var peso;
    var temperatura;
    var temperaturaPar=0;
    var marcaPesada;
    var menos0º=0;
    var acumuladorPeso=0;
    var contadorPeso=0;
    var promedioPeso;
    var pesoMaximo;
    var pesoMinimo;
    var flag=0;
    var respuesta;

    do{
        marca=prompt("Ingrese el nombre de una marca");
        
        peso=parseInt(prompt("Ingrese un peso entre 1 y 100"));
        while(peso<1 || peso>100 || isNaN(peso))
        {
            peso=parseInt(prompt("Dato invalido. Ingrese un peso entre 1 y 100"));
        }
         temperatura=parseInt(prompt("ingrese una temperatura entre -30 y 30 ºC"));
         while(temperatura<-30 || temperatura>30 || isNaN(temperatura))
         {
            temperatura=parseInt(prompt("dato invalido. ingrese una temperatura entre -30 y 30 ºC"));
         }

        
         if(temperatura%2==0)
         {
             temperaturaPar++;
         }

         if(flag==0 || peso>pesoMaximo)
         {
             pesoMaximo=peso;
             marcaPesada=marca;
         }

         if(flag==0 ||peso<pesoMinimo)
         {
             pesoMinimo=peso;
             flag=1;
         }

         if(temperatura<0)
         {
             menos0º++;
         }

         acumuladorPeso=acumuladorPeso+peso;
         contadorPeso++;

         respuesta=prompt("Quiere seguir ingresando?")

    }while(respuesta == "si" || respuesta == "s");

    promedioPeso=acumuladorPeso/contadorPeso;

    document.write("a) La cantidad de temperaturas pares es: "+temperaturaPar+"</br>");
    document.write("b) La marca del producto más pesado es: "+marcaPesada+" con un peso de "+pesoMaximo+"</br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados es: "+menos0º+"</br>"); 
    document.write("d) El promedio del peso de todos los productos es: "+promedioPeso+"</br>");
    document.write("f) El peso máximo y el mínimo es: "+pesoMaximo+" "+pesoMinimo+" respectivamente");*/
    
    var marca;
    var pesoPorBolsa;
    var pesoTotal;
    var Contenedor=0;
    var cantidadDeBolsas;
    var importePorBolsa;
    var respuesta;

    var pesoMaximo;
    var bolsasMaximas;
    var importeMaximo;
    var pesoMinimo;

    var marcaMasKilos;
    var marcaMasBolsas;
    var marcaMayorImporte;

    var importeMenosKilos;
    var marcaMenosKilos;

    var i=0;

    do{
        if(Contenedor>=1000)
        {
            break;
        }

        marca=prompt("Ingrese una marca de alimento para perros");
        while(!(isNaN(marca)) || marca.length==0)
        {
            marca=prompt("Ingrese una marca de alimento para perros");
        }

        pesoPorBolsa=parseInt(prompt("Ingrese el peso de cada bolsa, que no supere 1000Kg"));
        while(pesoPorBolsa>1000 || pesoPorBolsa<1 || isNaN(pesoPorBolsa))
        {
            pesoPorBolsa=parseInt(prompt("Ingrese el peso de cada bolsa, que no supere 1000Kg"));
        }

        cantidadDeBolsas=parseInt(prompt("Ingrese la cantidad de bolsas"));
        while(isNaN(cantidadDeBolsas) || cantidadDeBolsas<1)
        {
            cantidadDeBolsas=parseInt(prompt("Ingrese la cantidad de bolsas"));
        }

        importePorBolsa=parseInt(prompt("Ingrese el importe por cada bolsa"));
        while(isNaN(importePorBolsa || importePorBolsa<0))
        {
            importePorBolsa=parseInt(prompt("Ingrese el importe por cada bolsa"));
        }

            pesoTotal=(cantidadDeBolsas*pesoPorBolsa);
            Contenedor=Contenedor+(cantidadDeBolsas*pesoPorBolsa);

            if(i==0 || pesoPorBolsa<pesoMinimo)
            {
                pesoMinimo=pesoPorBolsa;
                importeMenosKilos=importePorBolsa;
                marcaMenosKilos=marca;

            }

            if(i==0 || pesoTotal>pesoMaximo)
            {
                pesoMaximo=pesoTotal;
                marcaMasKilos=marca;
                
            }

            if(i==0 || cantidadDeBolsas>bolsasMaximas)
            {
                marcaMasBolsas=marca;
                bolsasMaximas=cantidadDeBolsas;
            }

            if(i==0 || importePorBolsa>importeMaximo)
            {
                importeMaximo=importePorBolsa;
                marcaMayorImporte=marca;
            }

            i++;



        respuesta=prompt("Quiere seguir ingresando?")
    }while(respuesta=="si" || respuesta=="s" && Contenedor<1000);

    

document.write("la marca que tiene mas kilos es "+marcaMasKilos+" y su cantidad de kilos es de "+pesoMaximo);
document.write("</br>la marca que tiene mas bolsas de alimento es "+marcaMasBolsas+" y su cantidad de bolsas es de "+bolsasMaximas);
document.write("</br>la marca que tiene el mayor importe por bolsa es "+marcaMayorImporte+" y su iporte es de "+importeMaximo);
document.write("</br>el importe y la marca de la bolsa de aliemto menos pesada es de "+importeMenosKilos+"$ , su marca es "+marcaMenosKilos+" y el peso de la bolsa es de "+pesoMinimo);
}

    
    


    




