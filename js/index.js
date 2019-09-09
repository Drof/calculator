(function(){
function plus (){
   var num1,num2,result;
   num1 = document.getElementById('number1').value;
   num1 = parseInt(num1);

   num2 = document.getElementById('number2').value;
   num2 = parseInt(num2);

   result = num1 + num2;

   document.getElementById('out').innerHTML = result;
}

function minus (){
   var num1,num2,result;
   num1 = document.getElementById('number1').value;
   num1 = parseInt(num1);

   num2 = document.getElementById('number2').value;
   num2 = parseInt(num2);

   result = num1 - num2;

   document.getElementById('out').innerHTML = result;
}

function division (){
   var num1,num2,result;
   num1 = document.getElementById('number1').value;
   num1 = parseInt(num1);

   num2 = document.getElementById('number2').value;
   num2 = parseInt(num2);

   result = num1/num2;

   document.getElementById('out').innerHTML = result;
}

function multiplication (){
   var num1,num2,result;
   num1 = document.getElementById('number1').value;
   num1 = parseInt(num1);

   num2 = document.getElementById('number2').value;
   num2 = parseInt(num2);

   result = num1*num2;

   document.getElementById('out').innerHTML = result;
}
})();