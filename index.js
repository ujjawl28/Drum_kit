var noOfDrum = document.querySelectorAll(".drum").length;

for(var i=0;i<noOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    //  this.style.color ="white";  
     var buttonInnerHTML = this.innerHTML;

     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML)
    });
}


document.addEventListener("keypress",  function(event) {
    makeSound(event.key);
});

function makeSound(key){
    buttonAnimation(key);
    switch(key){
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play(); 
             break;

         case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play(); 
            break; 
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
             tom4.play(); 
            break; 
            
        case "j":
            var tom5 = new Audio('./sounds/snare.mp3');
             tom5.play();
             break; 
        
        case "k":
            var tom6 = new Audio('./sounds/crash.mp3');
             tom6.play();
             break;
         case "l":
                var tom7 = new Audio('./sounds/kick-bass.mp3');
                 tom7.play();
                 break;
    
            default: console.log(buttonInnerHTML );
         }
          
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}














// calculator
// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) { Higher order function
//     return operator(num1, num2);
//     }