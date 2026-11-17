const container = document.querySelector(".container");



const Dim = 30;

function createDiv(){
    for(let i=1; i<=Dim; i++){
        const containerDIV = document.createElement("div")
        containerDIV.classList.add("containerDIV")
        for(let j =1; j<=Dim; j++){
            const squareDIV = document.createElement("div");
            squareDIV.classList.add("squareDIV")
            containerDIV.appendChild(squareDIV);
        }
        container.appendChild(containerDIV)
        
    }
}

createDiv();