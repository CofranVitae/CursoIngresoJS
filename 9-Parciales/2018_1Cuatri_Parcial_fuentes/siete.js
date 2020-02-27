function mostrar()
{
    var i;
    var nota;
    var sexo;
    var acumulador=0;
    var notaMasBaja;
    var SexMasBajo;
    var promedio;
    var varonesMay6=0;

    for(i=0;i<5;i++)
    {
        nota=parseInt(prompt("ingrese una nota entre 0 y 10"));
        
        while(isNaN(nota) || nota<0 || nota>10)
        {
            nota=parseInt(prompt("Dato invalido. ingrese una nota entre 0 y 10"));
        }

        sexo=prompt("Ingrese un sexo, m para masculino o f para femenino").toLowerCase();

        while(sexo!= "f" && sexo!="m")
        {
            sexo=prompt("Dato invalido. Ingrese un sexo, m para masculino o f para femenino").toLowerCase();
        }

    acumulador=acumulador+nota;

    if(nota<notaMasBaja || i==0)
    {
        notaMasBaja=nota;
        SexMasBajo=sexo;
    }


    if(sexo=="m" && nota>=6)
    {
        varonesMay6++;
    }

    }

    promedio=acumulador/i;

    document.write("a) El promedio de las notas totales es: "+promedio+"</br>");
    document.write("b) La nota más baja y el sexo de esa persona es: "+notaMasBaja+"  "+SexMasBajo+"</br>");
    document.write("c) La cantidad de varones que su nota haya sido mayor o igual a 6 es: "+varonesMay6);
}



    

