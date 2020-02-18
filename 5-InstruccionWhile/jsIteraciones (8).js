function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("Escribí un número.");
		numero=parseInt(numero);
		
		if(numero>0)
		{
			positivo=numero+positivo;
		}
		else if(numero<0)
		{
			negativo=numero*negativo;
		}
		else
		{
			alert("ese numero no es valido, ingresa otro wachin");
		}
		
		respuesta=prompt("¿Queres ingresar mas numeros? responde si o no");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN