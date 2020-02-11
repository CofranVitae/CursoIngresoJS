function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{
    case mesDelAño="Enero":
    case mesDelAño="Marzo":
    case mesDelAño="Mayo":
    case mesDelAño="Julio":
    case mesDelAño="Agosto":
    case mesDelAño="Octubre":
    case mesDelAño="Diciembre":
        {
            alert("Este mes tiene 31 dias")
            break;
        }
    case mesDelAño="Abril":
    case mesDelAño="Junio":
    case mesDelAño="Septiembre":
    case mesDelAñp="Noviembre":
        {
            alert("Este mes tiene 30 dias")
            break;
        
        }
    case mesDelAño="Febrero":
        {
            alert("Este mes tiene 28 dias")
            break;
        }
}
	
	



}//FIN DE LA FUNCIÓN