const container = document.querySelector(".container");
const btn = document.querySelector("button")


function gridSize(){
    let size = prompt("Set number of squares for your grid", "16");
    if(size <= 100){
        container.textContent="";
        let Dim = 16;
        Dim = size;
        console.log(Dim);
        for(let i=1; i<=Dim; i++){
            const containerDIV = document.createElement("div");
            containerDIV.classList.add("containerDIV");
            for(let j =1; j<=Dim; j++){
                const squareDIV = document.createElement("div");
                squareDIV.classList.add("squareDIV");
                containerDIV.appendChild(squareDIV);
            }
        container.appendChild(containerDIV);
        }
    }
    else(
        alert("Please type a number below 100")
    )
}


btn.addEventListener("click", gridSize);





