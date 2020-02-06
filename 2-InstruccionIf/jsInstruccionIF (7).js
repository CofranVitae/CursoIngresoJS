function mostrar()
{
//tomo la edad  
var edad;
var ec;

edad=document.getElementById("edad").value;
ec=document.getElementById("estadoCivil").value;

if(edad<18 && ec!="Soltero")
{
alert("Es muy pequeño para NO ser soltero");
}


	


}//FIN DE LA FUNCIÓN