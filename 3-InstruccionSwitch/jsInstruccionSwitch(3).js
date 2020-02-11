function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
    switch(mesDelAño)
    {
        case mesDelAño = "Febrero" :
        {
            alert("Este mes no tiene mas de 29 dias")
            break;
        }
        case mesDelAño = "Enero" :
        case mesDelAño = "Marzo":
        case mesDelAño = "Abril":
        case mesDelAño = "Mayo":
        case mesDelAño = "Junio":
        case mesDelAño = "Julio":
        case mesDelAño = "Agosto":
        case mesDelAño = "Septiembre":
        case mesDelAño = "Octubre":
        case mesDelAño = "Noviembre":
        case mesDelAño = "Diciembre":
        {
            alert("Este mes tiene 30 o mas dias")
            break;
        }
    }


}//FIN DE LA FUNCIÓN