function mostrar()
{
//tomo la edad  
var edad;
var ec;

edad=document.getElementById("edad").value;
ec=document.getElementById("estadoCivil").value;

if(edad<18 && ec!="Soltero")
{

}
else if(edad>=18 && ec=="Soltero")
{
    alert("Es soltero y no es menor");
}
else if(edad<18 && ec=="Soltero")
{
    alert("Es soltero y es menor");
}
else if(edad>=18 && ec=="Casado")	
{
    alert("Es casado y mayor de edad");
}
else if(edad>=18&&ec=="Divorciado")
{
    alert("Es divorciado y mayor de edad");
}


}//FIN DE LA FUNCIÓN