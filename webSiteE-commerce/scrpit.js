

let counter = 0 ;

function increment(){
    let cardButton = document.querySelector(".buyAddCard");
    let placeForNumber = document.querySelector(".number");
    cardButton = counter+=1 ;
    placeForNumber.innerHTML = cardButton;
}


let section = document.getElementById("sectionAction");
let spans = document.querySelectorAll(".prog span");

window.onscroll = function(){
    if (window.scrollY >= section.offsetTop + 100) {
        console.log("we are here ");
        spans.forEach((span) => {
            span.style.width = span.dataset.width ;
        })
    }
}

let setionStart = document.getElementById("sectionNumbers");
let num = document.querySelectorAll(".box-for-numbers .number1");
let start = false ;


function startCounter(el){
    let gol = el.dataset.goal ;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == gol) {
            clearInterval(count);
        }
    }, 3000 / gol);
}


//code for cardShop :



//end code for cardShop 





