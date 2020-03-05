function mostrar()
{
    var nombre;
    var peso;
    var temperatura;
    var respuesta;

    var tempPar=0;
    
    var nombrePesado;
    var temperaturaPesada;

    var cantMenos0=0;

    var acumPeso=0;
    var promedioPeso;
    var contPeso=0;
    
    var pesoMax;

    var pesoMax0;
    var pesoMin0;

    var flag=0;

    do
    {
        nombre=prompt("Ingrese el nombre de un animal").toLowerCase();

        peso=parseInt(prompt("Ingrese el peso dewl animal entre 1 y 1000"));
        while(isNaN(peso) || peso<1 || peso>1000)
        {
            peso=parseInt(prompt("Ingrese el peso dewl animal entre 1 y 1000"));
        }

        temperatura=parseInt(prompt("Ingrese una temperatura entre -30 y 30"));
        while(isNaN(temperatura) || temperatura<-30 || temperatura>30)
        {
            temperatura=parseInt(prompt("Ingrese una temperatura entre -30 y 30"));
        }

        if(temperatura%2==0)
        {
            tempPar++;
        }

        if(flag==0 || peso>pesoMax)
        {
            nombrePesado=nombre;
            temperaturaPesada=temperatura;
            flag=1;
        }

        if(temperatura<0)
        {
            cantMenos0++;
            if(cantMenos0==1 || peso>pesoMax0)
            {
                pesoMax0=peso;
            }
            if(cantMenos0==1 || peso<pesoMin0)
            {
                pesoMin0=peso;
            }
        }

        acumPeso+=peso;
        contPeso++;



        respuesta=prompt("Quiere seguir ingresando?");
    }while(respuesta=="si" || respuesta=="s");

    promedioPeso=acumPeso/contPeso;
document.write("a La cantidad de temperaturas pares. "+tempPar+"</br>");
document.write("b El nombre y temperatura del animal más pesado "+nombrePesado+" "+temperaturaPesada+"</br>");
document.write("c La cantidad de animales que viven a menos de 0 grados. "+cantMenos0+"</br>");
document.write("d El promedio del peso de todos los animales. "+promedioPeso+"</br>");
document.write("f El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero. "+pesoMax0+" "+pesoMin0+"</br>");

}
