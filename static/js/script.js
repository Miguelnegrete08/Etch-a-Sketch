const container = document.querySelector(".container");



const Dim = 4*4;

function createDiv(){
    for(let i=1; i<=Dim; i++){
        const squareDIV = document.createElement("div");
        squareDIV.classList.add("squareDIV")
        container.appendChild(squareDIV);
    }
}

createDiv();