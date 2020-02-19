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
	var resto;
	var respuesta="si"

	while(respuesta!="no")
	{
		numero=prompt("Ingresa un numero");
		numero=parseInt(numero);
		
		resto=numero%2;
		
		
		if(numero<0)
		{
			negativos=numero+negativos;
			contador=contador+1;
			promedioNegativo=negativos/contador;

			if(resto==0)
			{
				contador4=contador4+1;
			}

		}
		else if(numero>0)
		{
			positivos=numero+positivos;
			contador2=contador2+1;
			promedioPositivo=positivos/contador2;

			if(resto==0)
			{
				contador4=contador4+1;
			}
		}
		else if(numero==0)
		{
			contador3=contador3+1;
		}
		else
		{
			alert("Eso que ingresaste no es un numero.");
		}
		
		respuesta=prompt("Si queres dejar de ingresar numeros escribi no, si queres seguir, escribi si.");

	}
	
	diferencia=positivos-negativos;

	document.write("Los negativos suman: "+negativos+"<br/>");
	document.write("La cantidad de negativos es: "+contador+"<br/>");
	document.write("Los positivos suman: "+positivos+"<br/>");
	document.write("La cantidad de positivos es: "+contador2+"<br/>");
	document.write("La cantidad de ceros es: "+contador3+"<br/>");
	document.write("La cantidad de numeros pares es: "+contador4+"<br/>");
	document.write("El promedio de los positivos es: "+promedioPositivo+"<br/>");
	document.write("El promedio de los negativos es: "+promedioNegativo+"<br/>");
	document.write("La diferencia entre positivos y negativos es: "+diferencia);



}//FIN DE LA FUNCIÓN