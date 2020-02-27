function mostrar()
{
    var marca;
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
    document.write("f) El peso máximo y el mínimo es: "+pesoMaximo+" "+pesoMinimo+" respectivamente");
}

    
    


    




