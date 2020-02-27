function mostrar()
{
   var letra;
   var numero;
   var pares=0;
   var impares=0;
   var ceros=0;
   var promPos;
   var acumPos=0;
   var acumNeg=0;
   var numMax;
   var letraMax;
   var numMin;
   var letraMin;
   var respuesta;
   var i=0;
   var contPos=0;

   do{
       letra=prompt("Ingrese una letra").toLowerCase();
       while(!(letra>= "a" && letra<= "z") || letra.length>1)
       {
        letra=prompt("dato invalido. Ingrese una letra").toLowerCase();
       }

       numero=parseInt(prompt("Ingrese un numero entre -100 y 100"));
       while(isNaN(numero) || numero <-100 || numero > 100)
       {
        numero=parseInt(prompt("Dato invalido. Ingrese un numero entre -100 y 100"));
       }

        if(numero%2==0)
        {
            pares++;
        }else{
            impares++;
        }

        if(numero==0)
        {
            ceros++;
        
        }else if(numero<0){
            
            acumNeg=acumNeg+numero;
        
        }else{
            
            contPos++;
            acumPos=acumPos+numero;
            
        }

        if(i==0 || numero>numMax)
        {
            numMax=numero;
            letraMax=letra;
        }
        if(i==0 || numero<numMin){
            numMin=numero;
            letraMin=letra;
        }

        i++;

       respuesta=prompt("Quiere seguir ingresando datos?").toLowerCase();
       
   }while(respuesta != "no" && respuesta != "n");

   promPos=acumPos/contPos;
   
   document.write("La cantidad de numeros pares es: "+pares+"</br>");
   document.write("La cantidad de numeros impares es: "+impares+"</br>");
   document.write("La cantidad de ceos es: "+ceros+"</br>");
   document.write("El promedio de todos los positivos ingresados es: "+promPos+"</br>");
   document.write("La suma de los numeros negativos es: "+acumNeg+"</br>");
   document.write("El numero maximo ingresado es: "+numMax+" con la letra "+letraMax+"</br>");
   document.write("El numero minimo ingresado es: "+numMin+" con la letra "+letraMin);
   
   
   


}
