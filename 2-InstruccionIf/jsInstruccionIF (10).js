function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;
	
	num=Math.floor((Math.random()*10))
	
    alert(num);
	
	if(num>=9)
	{
		alert("Excelente");
	}
	else if(num>=4 && num<=8)
	{
		alert("Aprobado");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}


}//FIN DE LA FUNCIÓN