function mostrar()
{

var sexo;

while(sexo!="f" && sexo!="m")
{
    sexo = prompt("ingrese f o m.");
    if(sexo!="f" && sexo!="m")
    {
        alert("Por favor, ingrese un dato valido.");
    }
    
}

    if(sexo=="f")
    {
        document.getElementById('Sexo').value="Femenino";
    }
    else if(sexo=="m")
    {
        document.getElementById("Sexo").value="Masculino";
    }

}//FIN DE LA FUNCIÓN