const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.querySelector("input");
    button.addEventListener("click", addText);

}

const addText = () => {
    let para = document.createElement("p");
    let div = document.querySelector("#myDIV");
    para.innerText = "Some text";
    div.appendChild(para);
}

window.addEventListener("load", setup);