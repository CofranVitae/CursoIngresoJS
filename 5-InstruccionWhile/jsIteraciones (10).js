function mostrar()
{

	var contador=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var numero;
	var negativos=0;
	var positivos=0;
	var promedioNegativo=0;
	var promedioPositivo=0;
	var diferencia;
	var respuesta="si"
	
	do
	{
		numero=prompt("Ingresa un numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=parseInt(prompt("Eso no es un numero, por favor ingresa de nuevo"));
		}
		
		if(numero<0)
		{
			negativos=numero+negativos;
			contador++;
		
		}
		else if(numero>0)
		{
			positivos=numero+positivos;
			contador2++;
			
		}
		else
		{
			contador3++;
		}
		if(numero%2==0)
		{
			contador4++;
		}
		
		respuesta=prompt("Queres seguir ingresando numeros?");

	}while(respuesta=="si");
	
	if(contador2!=0)
	{
	promedioPositivo=positivos/contador2;
	}
	if(contador!=0)
	{
		promedioNegativo=negativos/contador;
	}
	diferencia=positivos-negativos;
	
	
	document.write("Los negativos suman: "+negativos+"</br>");
	document.write("La cantidad de negativos es: "+contador+"<br/>");
	document.write("Los positivos suman: "+positivos+"<br/>");
	document.write("La cantidad de positivos es: "+contador2+"<br/>");
	document.write("La cantidad de ceros es: "+contador3+"<br/>");
	document.write("La cantidad de numeros pares es: "+contador4+"<br/>");
	document.write("El promedio de los positivos es: "+promedioPositivo+"<br/>");
	document.write("El promedio de los negativos es: "+promedioNegativo+"<br/>");
	document.write("La diferencia entre positivos y negativos es: "+diferencia);



}//FIN DE LA FUNCIÓN