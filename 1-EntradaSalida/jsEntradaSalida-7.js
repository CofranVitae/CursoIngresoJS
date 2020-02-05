/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
    
var n1;
var n2;
var r;
n1=document.getElementById("numeroUno").value;
n2=document.getElementById("numeroDos").value;
n1=parseInt(n1);
n2=parseInt(n2);
    r=n1+n2;
    alert("La respuesta es: "+r);
}

function restar()
{
var n1;
var n2;
var r;
n1=document.getElementById("numeroUno").value;
n2=document.getElementById("numeroDos").value;
n1=parseInt(n1);
n2=parseInt(n2);
    r=n1-n2;
    alert("la respuesta es: "+r);
}

function multiplicar()
{ 
var n1;
var n2;
var r;
n1=document.getElementById("numeroUno").value;
n2=document.getElementById("numeroDos").value;
n1=parseInt(n1);
n2=parseInt(n2);
    r=n1*n2;
    alert("la respuesta es: "+r);
}

function dividir()
{
var n1;
var n2;
var r;
n1=document.getElementById("numeroUno").value;
n2=document.getElementById("numeroDos").value;
n1=parseInt(n1);
n2=parseInt(n2);
    r=n1/n2;
    alert("la respuesta es: "+r);
}

