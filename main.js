// var mybutton=document.getElementById("mybutton");


// function backgr(){
//     let backcol=document.getElementById("box");
     
//     let change=Math.ceil(Math.random()* 256).toString();
//     backcol.style.backgroundColor ="#"+change;


    
// }
// mybutton.addEventListener("click",backgr)



// var input = document.getElementById("inputs");
// var sec = document.getElementById("sec");
// var mybutton2 = document.getElementById("mybutton2");

// let changes ="";

// function output(){
//     changes=input.value;
//     sec.style.backgroundColor=changes;
// }
// mybutton2.addEventListener("click",output);



// var d1 = new Date("03/5/2020 , 5:15:00");   
// var d2 = new Date("03/5/2020 , 11:15:00");   

// var diff = d2.getTime() - d1.getTime();   


// var daydiff = diff / ( 1000 * 60 * 60 );   
// document.write( daydiff +"  " + "hours");  




//     let drome = prompt("enter a string");
  
//     let out =  drome.split("").reverse().join("");
      
//       if(out == drome){
//         console.log("its a palindrome")
//       }else{
//         console.log("not a polindrome")
//       }
    
//     console.log(out)

// let number = [4,13,8,120,55];

// let out1 = number.find( ele => ele > 100);

// console.log(out1)

//  console.log("hello world")


 let button1 = prompt("enter a value"); 

const objects = {
    obj1: [
      { x: 96, y: 0, type: 'type1', yaw: 0 },
      { x: 192, y: 0, type: 'type1', yaw: 0 }
    ],
    obj2: [
      { x: 96, y: 0, type: 'type2', yaw: 0 },
      { x: 192, y: 0, type: 'type2', yaw: 0 }
     ]
  };
   
   function call (){
    if ( prompt === obj1 ){
        return objects.obj1.value ;
    }else{
        return objects.obj2.value;
    }
   }

   call();

   console.log()
  
  

  
//   const base_buttons = document.querySelectorAll(".base_build");
//   base_buttons.forEach(buttons => {
//     buttons.addEventListener('click', (e) => {
//       build(objects[e.target.value]);
//     });
//   })
  
//   const build = (builds) => {
//     console.log(builds);
//   }