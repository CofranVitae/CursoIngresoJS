function mostrar()
{
    var nota;
    var sexo;
    var i;
    var acumNotas=0;
    var promedio;
    var baja;
    var sexoBajo;
    var cantMayor6=0;

    for(i=0;i<5;i++)
    {
        nota=parseInt(prompt("Ingrese una nota del 0 al 10"));
        while(isNaN(nota) || nota<0 || nota>10)
        {
            nota=parseInt(prompt("Dato invalido, Ingrese una nota del 0 al 10"));
        }

        sexo=prompt("Ingrese un sexo, f para femenino y m para masculino").toLowerCase();
        while(sexo!="f" && sexo!="m")
        {
            sexo=prompt("Dato invalido, Ingrese un sexo, f para femenino y m para masculino").toLowerCase();
        }

        acumNotas=nota+acumNotas;

        if(i==0)
        {
            baja=nota;
            sexoBajo=sexo;
        }
        if(baja>nota)
        {
            baja=nota;
            sexoBajo=sexo;
        }
        if(sexo=="m" && nota>=6)
        {
            cantMayor6++;
        }
    }
    
    promedio=acumNotas/i;

    alert("el promedio de las notas es "+promedio);
    alert("La nota mas baja es "+baja+" y el sexo de ese alumno es "+sexoBajo);
    alert("la cantidad de varones con notas mayor a 6 es "+cantMayor6);

}



    

