function mostrar()
{
     var hora;
     
     hora=parseInt(document.getElementById("laHora").value);

     /*if(hora>=1 && hora<=24)
     {
         switch(hora)
         {
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                 {
                    alert("Es de mañana");
                    break;
                 }
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                {
                    alert("es de tarde");
                    break;
                }
            default:
                {
                    alert("Es de noche");
                    
                    if(hora<24)
                    {
                        alert("A dormir");
                    }
                }
         }
     }
     else
     {
         alert("El dato ingresado no es una hora valida");
     }*/

     switch(hora)
    {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
             {
                alert("Es de mañana");
                break;
             }
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            {
                alert("es de tarde");
                break;
            }
        default:
            {
                if(hora<1 || hora>24)//(!(hora>=1&&hora<=24))
                {
                    alert("Esa hora no es valida")
                }
                else
                {
                    alert("es de noche")

                    if(hora<24)
                    {
                        alert("A dormir");
                    }
                }
            }

                
                
        
    }
     

     

}
