function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	
	{
	numero=prompt("Escriba un numero");
	numero=parseInt(numero);
	//Para validar si es un dato verdadero.
	//puedo poner while dentro de while.
	while(isNaN(numero))
	{
		numero=prompt("Eso no es un numero, ingresa denuevo")
	}
	
	acumulador=numero+acumulador;
	contador=contador+1;
	
	}
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN