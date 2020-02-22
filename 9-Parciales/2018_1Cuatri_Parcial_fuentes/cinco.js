function mostrar()
{
    var planeta;

    planeta=prompt("Ingresa un planeta del sistema solar");

    switch(planeta)
    {
        case "tierra":
        {
            alert("Aca vivimos");
            break;
        }
        case "mercurio":
        case "venus":
        {
            alert("aca hace mas calor");
            break;
        }
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
        {
            alert("aca hace mas frio");
            break;
        }
        default:
        {
            alert("Ese no es un planeta del sistema solar")
        }


    }

}
