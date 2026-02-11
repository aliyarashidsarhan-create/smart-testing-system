

var userEmail =prompt("Please Enter Your Email")
var userPsaa =prompt("Please Enter Your password")

 var count=0

while(userEmail !="ahmed@gmail" || userPsaa !="12345A" )
{
  //3 trys to enter pasword then stop 
 count ++;
 if (count<3){
  userEmail =prompt("Please Enter Your Email")
  userPsaa =prompt("Please Enter Your password")

}else{
 alert("Tiy to many time ");
 break;
}
}


if(userEmail =="ahmed@gmail" && userPsaa =="12345A" )
{
  alert("successfully logged in  ");

  var number_of_questions=+prompt("please Enter Your number of questions")
  var operators=["+","-","*","/"]
  var score=0


  for (var i=1; i<=number_of_questions;i++){
    
    var num1=Math.floor(Math.random() *10)
    var num2=Math.floor(Math.random() *10)
    var operation=operators[Math.floor(Math.random() * operators.length)]

    var correctAnswer;
    
    if(operation == "+")
      correctAnswer=num1+num2;
    else if (operation == "-")
      correctAnswer =num1-num2;
    else  if(operation =="*")
      correctAnswer= num1*num2;
    else if(operation =="/")
     correctAnswer =num1/num2;

    
    var userAnswer =+prompt(`${i} ${num1} ${operation} ${num2}= `)
    if (correctAnswer == userAnswer)
      score++;
 
}

    alert( `your score = ${score} / ${number_of_questions} ` )


}























