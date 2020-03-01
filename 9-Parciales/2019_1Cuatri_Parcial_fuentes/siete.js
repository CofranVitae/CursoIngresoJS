function mostrar()
{
    var altura;
    var sexo;
    var acumuladorPromedio=0;
    var promedio;
    var alturaBaja;
    var sexoBajo;
    var mujeres190cm=0;
    var flag=0;
    
    for(var i=0;i<5;i++)
    {
        altura=parseInt(prompt("Ingrese una altura entre o y 250 cm"));
        while(altura<0 || altura>250 || isNaN(altura))
        {
            altura=parseInt(prompt("dato invalido. Ingrese una altura entre o y 250 cm"));
        }

        sexo=prompt("ingrese un sexo, f para femenino, m para masculino").toLocaleLowerCase();
        while(sexo!="f" && sexo!="m")
        {
            sexo=prompt("dato invalido. ingrese un sexo, f para femenino, m para masculino").toLocaleLowerCase();
        }

        acumuladorPromedio+=altura;

        if(flag==0 || altura<alturaBaja)
        {
            alturaBaja=altura;
            sexoBajo=sexo;
            flag++;
        }

        if(sexo=="f" && altura>190)
        {
            mujeres190cm++;
        }



    }
    promedio=acumuladorPromedio/5;

    document.write("El promedio de las alturas totales es: "+promedio+"</br>")
document.write("La altura mas baja ingresada y el sexo de esa persona son: "+alturaBaja+" "+sexoBajo+"</br>")
document.write("La cantidad de mujeres que miden mas de 190cm es: "+mujeres190cm)


}

