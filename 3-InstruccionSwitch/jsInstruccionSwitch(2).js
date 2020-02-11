function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{

    case mesDelAño="Enero":
    case mesDelAño="Febrero":
    case mesDelAño="Marzo": 
    case mesdelAño="Abril":
    case mesdelAño="Mayo":
    case mesDelAño="Junio":
        {
            alert("Falta para el invierno")
            break;
        }
    case mesDelAño="Julio":
    case mesDelAño="Agosto":
        {
            alert("Abrigate que hace frio")
            break;
        }
    case mesDelAño="Septiembre":
    case mesDelAño="Octubre":
    case mesDelAño="Noviembre":
    case mesDelAño="Diciembre":
        {
            alert("Ya paso el frio, ahora el calor")
            break;
        }

 
  

}






}//FIN DE LA FUNCIÓN