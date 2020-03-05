function mostrar()
{
    var nota;
    var sexo;
    var i;

    var promedioTotal;
    var acumTotal=0;

    var varonesMayor6=0;

    var notaBaja;
    var sexoBajo;

    for(i=0;i<5;i++)
    {
        nota=parseInt(prompt("Ingrese una nota del 0 al 10"));
        while(isNaN(nota) || nota<0 || nota>10)
        {
            nota=parseInt(prompt("Ingrese una nota del 0 al 10"));
        }

        sexo=prompt("Ingrese f pra femenino o m par masculino").toLowerCase();
        while(sexo!="f" && sexo!="m")
        {
            sexo=prompt("Ingrese f pra femenino o m par masculino").toLowerCase();
        }

        acumTotal+=nota;

        if(sexo=="m" && nota>=6)
        {
            varonesMayor6++;
        }

        if(i==0 || nota<notaBaja)
        {
            notaBaja=nota;
            sexoBajo=sexo;
        }
    }

    promedioTotal=acumTotal/5;

document.write("promedio total de notas es "+promedioTotal +"</br>");
document.write("la cantidad de varones con nota mayor o igual a 6 es "+varonesMayor6 +"</br>");
document.write("la nota mas baja es "+notaBaja +"Y el sexo de esa persona es "+sexoBajo+"</br>");
}




