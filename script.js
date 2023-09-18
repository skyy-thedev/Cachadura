const cards = document.getElementById("imgx");
const card = document.querySelectorAll("#imgx Card");

let idX = 0;

function cardAnimation(){
    idX++;

    if (idX > card.length - 1){
        idX = 0;
    }

    cards.style.transform = `translateX(${-idX * 500}px)`;
}

setInterval(cardAnimation, 1800);