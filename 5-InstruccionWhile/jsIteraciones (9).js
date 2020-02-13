function mostrar()

{
	var numero;
	var maximo=0;
	var minimo;
	var respuesta="si";
	
	while(respuesta!="no")
	{
		numero=prompt("Escribí un número");
		respuesta=prompt("Si no queres singresar mas numeros, escribi no, si no escribi cualquier cosa.");
		numero=parseInt(numero);
		

		if(numero>maximo)
		{
			maximo=numero;
		}
		else if(numero<minimo || numero<maximo)
		{
			minimo=numero;
		}
		
	}	

	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN