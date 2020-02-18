function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;
	var max;
	var min;
	max=11;
	min=1;
	
	num=Math.floor((Math.random()*(max+1-min-1)+min));
	
    alert(num);
	
	if(num>9)
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