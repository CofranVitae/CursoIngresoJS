//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
	var numero;
	var resto;
	var contador=0;

	numero=prompt("asdasd");
	numero=parseInt(numero);
	resto=numero%2;
	if(resto==0)
	{
		contador=contador+1;
	}
	alert(contador);

	
}

