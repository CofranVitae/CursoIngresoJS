function mostrar()
{
    var pais;
    var habitantes;
    var temperatura;
    var respuesta;
    var contadorPares=0;
    var paisMenosHabitantes;
    var habitantesMinimos;
    var paisesMas40=0;
    var acumuladorHabitantes=0;
    var promedioHabitantes;
    var temperaturaMinima;
    var paisMenortemperatura;
    var i=0;

    do{
        pais=prompt("Ingrese el nombre de un pais");
        
        habitantes=parseInt(prompt("ingrese una cantidad de habitantes"));
        while(habitantes<1 || habitantes>7000 || isNaN(habitantes))
        {
            habitantes=parseInt(prompt("dato invalido. ingrese una cantidad de habitantes"));
        }

        temperatura=parseInt(prompt("ingrese una temperatura entre -50 y 50°C"));
        while(temperatura<-50 || temperatura>50 || isNaN(temperatura))
        {
            temperatura=parseInt(prompt("Dato invalido. ingrese una temperatura entre -50 y 50°C"));
        }

        if(temperatura%2==0){
            contadorPares++;
        }

        if(i==0 || habitantes<habitantesMinimos)
        {
            habitantesMinimos=habitantes;
            paisMenosHabitantes=pais;
            
        }

        if(temperatura>40)
        {
            paisesMas40++;
        }

        if(i==0 || temperatura<temperaturaMinima)
        {
            temperaturaMinima=temperatura;
            paisMenortemperatura=pais;
        }
        
        acumuladorHabitantes+=habitantes;
        i++;

        respuesta=prompt("Quiere seguir ingresando?").toLocaleLowerCase();
    }while(respuesta=="si" || respuesta=="s");

    promedioHabitantes=acumuladorHabitantes/i;
    
    document.write("La cantidad de temperaturas pares es: "+contadorPares+"</br>");
    document.write("El nombre del pais con menos habitantes es: "+paisMenosHabitantes+"</br>");
    document.write("La cantidad de paises con ams de 40°C es: "+paisesMas40+"</br>");
    document.write("El promedio de habitantes es: "+promedioHabitantes+"</br>");
    document.write("La temperatura minima ingresada y su pais es: "+temperaturaMinima+" "+paisMenortemperatura);
}


