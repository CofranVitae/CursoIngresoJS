function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var nota;
    var respuesta;
    var cantVaronesAprobados=0;

    var acumMenor=0;
    var iMenor=0;
    var promedioMenor;

    var acumAdolesc=0;
    var iAdolesc=0;
    var promedioAdolesc;

    var acumMayores=0;
    var iMayor=0;
    var promedioMayor;

    var acumMasc=0;
    var iMasc=0;
    var promedioMasc;

    var acumFem=0;
    var iFem=0;
    var promedioFem;

    do{
        nombre=prompt("Ingrese un nombre").toLowerCase();
        while(nombre<"a" || nombre>"z")
        {
            nombre=prompt("Ingrese un nombre").toLowerCase();
        }

        edad=parseInt(prompt("Ingrese una edad"));
        while(isNaN(edad) || edad<0)
        {
            edad=parseInt(prompt("Ingrese una edad"));
        }

        sexo=prompt("Ingrese el sexo, f o m").toLowerCase();
        while(sexo!="f" && sexo!="m")
        {
            sexo=prompt("Ingrese el sexo, f o m").toLowerCase();
        }

        nota=parseInt(prompt("Ingrese una nota del 1 al 10"));
        while(isNaN(nota) || nota<1 || nota>10)
        {
            nota=parseInt(prompt("Ingrese una nota del 1 al 10"));
        }


        if(sexo=="m")
        {
            acumMasc+=nota;
            iMasc++;
            if(nota>4)
            {
                cantVaronesAprobados++;
            }
        }
        else
        {
            acumFem+=nota;
            iFem++;
        }

        
        
        if(edad <=13)
        {
            acumMenor+=nota;
            iMenor++;
        }
        else if(edad >13 && edad<18)
        {
            acumAdolesc+=nota;
            iAdolesc++;
        }
        else
        {
            acumMayores+=nota;
            iMayor++;
        }






        respuesta=prompt("Quiere seguir ingresando?").toLowerCase();
    }while(respuesta=="si" || respuesta=="s");

    promedioMenor=acumMenor/iMenor;
    if(iMenor==0)
    {
        promedioMenor=0;
    }

    promedioAdolesc=acumAdolesc/iAdolesc;
    if(iAdolesc==0)
    {
        promedioAdolesc=0;
    }

    promedioMayor=acumMayores/iMayor;
    if(iMayor==0)
    {
        promedioMayor=0;
    }

    promedioMasc=acumMasc/iMasc;
    if(iMasc==0)
    {
        promedioMasc=0;
    }

    promedioFem=acumFem/iFem;
    if(iFem==0)
    {
        promedioFem=0;
    }

   document.write( "a) La cantidad de varones aprobados "+cantVaronesAprobados+"</br>");
   document.write( "b) El promedio de notas de los menores de edad "+promedioMenor+"</br>");
   document.write( "c) El promedio de notas de los adolescentes. "+promedioAdolesc+"</br>");
   document.write( "d) El promedio de notas de los mayores "+promedioMayor+"</br>");
   document.write( "f) El promedio de notas por sexo masculino: "+promedioMasc+" y femenino: "+promedioFem);
}


