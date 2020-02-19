function mostrar()
{

var sexo = prompt("ingrese f para femenino o m para masculino").toLowerCase();

//while(sexo!="f" && sexo!="m")
while(!(sexo=="f" || sexo=="m"))
{
    sexo = prompt("incrrecto, ingrese f o m.").toLowerCase();
    
}

if(sexo=="f")
{
    document.getElementById("Sexo").value="Femenino";
}
else
{
    document.getElementById("Sexo").value="Masculino";
}
}//FIN DE LA FUNCIÓN