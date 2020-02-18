function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero=parseInt(numero);
	while(!(numero>=0 && numero<10))
	{
		alert("Eso no es un dato valido.");
		 numero=prompt("ingrese nu numero entre 0 y 9");
		 numero=parseInt(numero);
	}
	
	document.getElementById("Numero").value=numero;


}//FIN DE LA FUNCIÓN