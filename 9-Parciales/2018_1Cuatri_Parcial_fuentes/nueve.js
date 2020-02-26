function mostrar()
{
    var marca;
    var peso;
    var temp;
    var respuesta;
    var acum=0;
    var cantTemp=0;
    var MaxPeso;
    var marcapesada;
    var MinPeso;
    var cant0º=0;
    var promedio=0;
    var i=0;
    
    do
    {
        marca=prompt("Ingrese una marca de un producto");
        

        peso=parseInt(prompt("Ingrese un peso entre 1 y 100 Kg"));
        while(isNaN(peso) || peso<1 || peso>100)
        {
            peso=parseInt(prompt("Dato invalido. Ingrese un peso entre 1 y 100 Kg"));
        }
        
        temp=parseInt(prompt("Ingrese una temperatura de almacenamiento entre -30 y 30 ºC"));
        while(isNaN(temp) || temp<-30 || temp>30)
        {
            temp=parseInt(prompt("dato invalido. Ingrese una temperatura de almacenamiento entre -30 y 30 ºC"));
        }

        
        if(temp%2==0)
        {
            cantTemp++;
        }

        if(i==0)
        {
            MaxPeso=peso;
            marcapesada=marca;
            MinPeso=peso;
            i++;
        }
        else
        {
            if(peso>MaxPeso)
            {
                MaxPeso=peso;
                marcapesada=marca;
            }
            if(peso<MinPeso)
            {
                MinPeso=peso;
            }
        }

        if(temp<0)
        {
            cant0º++;
        }

        acum=acum+peso;
        promedio++;
        
        respuesta=prompt("Quiere seguir ingresando productos?");

    }while(respuesta=="si");

    promedio=acum/promedio;

    document.write("La cantidad de temperaturas pares es "+cantTemp+"</br>");
    document.write("la marca del producto mas pesado es "+marcapesada+" con un peso de "+MaxPeso+"</br>");
    document.write("La cantidad de productos que se conservan a menos de 0ºC "+cant0º+"</br>");
    document.write("El promedio de los pesos es "+promedio+"</br>");
    document.write("El peso maximo es "+MaxPeso+"</br>");
    document.write("El peso minimo ingresado es "+MinPeso);

}

    
    


    




