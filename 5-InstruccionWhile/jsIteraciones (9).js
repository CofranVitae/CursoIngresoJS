function mostrar()

{
	var numero;
	var maximo=0;
	var minimo=0;
	var respuesta;
	var contador=0;
	
	do
	{
		numero=parseInt(prompt("Escribí un número"));
		
		while(isNaN(numero))
		{
			numero=parseInt(prompt("Ese dato no es valido, volve a ingresar un numero"));
		}
		
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
		
		respuesta=prompt("¿Queres seguir ingresando numeros? escribi si, si no escribi cualquier otra cosa.");
	}while(respuesta=="si");	

	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN