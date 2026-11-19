const container = document.querySelector(".container");
const btn = document.querySelector("button");
let Dim = 16;

function grid(size){
    for(let i=1; i<=size; i++){
        const containerDIV = document.createElement("div");
        containerDIV.classList.add("containerDIV");
        for(let j =1; j<=size; j++){
            const squareDIV = document.createElement("div");
            squareDIV.classList.add("squareDIV");
            containerDIV.appendChild(squareDIV);
        };
    container.appendChild(containerDIV);
    };
};

function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`
}

function color(){
    const square = document.querySelectorAll(".squareDIV");
        square.forEach((sqr) => {
            let defaultOpacity = 1;
            let color = randomColor()
            sqr.addEventListener("mouseenter", ()=>{
                sqr.setAttribute("style", `background:${color}`);
                defaultOpacity -= 0.1;
                sqr.style.opacity = defaultOpacity
        });
    });
};

function gridGenerate(){
    let size = prompt("Set number of squares for your grid", "16");
    if(size >0 && size <= 100){
        container.textContent="";
        Dim = size;
        grid(Dim);
        color();
    }
    else(
        alert("Please type a number between 1 and 100")
    )
}

function initialGrid(){
    grid(Dim);
    color();
}

initialGrid()
btn.addEventListener("click", gridGenerate);