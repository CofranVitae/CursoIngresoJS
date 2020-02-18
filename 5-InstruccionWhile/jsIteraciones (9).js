function mostrar()

{
	var numero;
	var maximo=0;
	var minimo=0;
	var respuesta="si";
	var contador=0;
	
	while(respuesta=="si")
	{
		numero=prompt("Escribí un número");
		respuesta=prompt("¿Queres seguir ingresando numeros? escribi si, si no escribi cualquier otra cosa.");
		numero=parseInt(numero);
		
	 	if(contador==0)
		{
			minimo=numero;
			maximo=numero;
		}
		else if(numero>maximo)
		{
			maximo=numero;
		}
		else if(numero<minimo)
		{
			minimo=numero;
		}
		
		contador=contador+1;
		
	}	

	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN