function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

	do//Do while porque se de antemano que quiero entrar si o si una vez
	{
		numero=prompt("Escribí un número.");
		numero=parseInt(numero);

		while(isNaN(numero))//Validar numero
		{
			numero=parseInt(prompt("ese numero no es valido, ingresa otro wachin"));
			
		}
		
		if(numero>=0)
		{
			positivo=numero+positivo;
		}
		else
		{
			negativo=numero*negativo;
			contador++;
		}
		
		respuesta=prompt("¿Queres ingresar mas numeros? responde si o no");
	
	}while(respuesta=="si");

if(contador==0)
{
	negativo=0;
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN