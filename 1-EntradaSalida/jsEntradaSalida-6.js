/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var n1;
var n2;
var R;
n1=document.getElementById("numeroUno").value;
n2=document.getElementById("numeroDos").value; 
n1=parseInt(n1);
n2=parseInt(n2);
R=n1+n2;
alert("la respuesta es : "+R);

}

