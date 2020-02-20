function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var suma;
	

	while(respuesta!="no")
	{
		
		
		suma=parseInt(prompt("Escribì un nùmero."));
		while(isNaN(suma))
		{
			suma=parseInt(prompt("No es valido, ingresa otro numero"));
		}
		
		contador=parseInt(contador);
		acumulador=parseInt(acumulador);
		
		contador=contador+1;
		acumulador=suma+acumulador;
		
		respuesta=prompt("Queres ingresar mas numeros?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN