var mybutton=document.getElementById("mybutton");


function backgr(){
    let backcol=document.getElementById("box");
     
    let change=Math.ceil(Math.random()* 256).toString();
    backcol.style.backgroundColor ="#"+change;


    
}
mybutton.addEventListener("click",backgr)



var input = document.getElementById("inputs");
var sec = document.getElementById("sec");
var mybutton2 = document.getElementById("mybutton2");

let changes ="";

function output(){
    changes=input.value;
    sec.style.backgroundColor=changes;
}
mybutton2.addEventListener("click",output);



var d1 = new Date("03/5/2020 , 5:15:00");   
var d2 = new Date("03/5/2020 , 11:15:00");   

var diff = d2.getTime() - d1.getTime();   


var daydiff = diff / ( 1000 * 60 * 60 );   
document.write( daydiff +"  " + "hours");  




    let drome = prompt("enter a string");
    for(let i = 0 ; i < drome.length ; i++){
    let out =  drome.reverse(i);
      
      if(out == drome){
        console.log("its a palindrome")
      }else{
        console.log("not a polindrome")
      }
    }
    console.log(out)