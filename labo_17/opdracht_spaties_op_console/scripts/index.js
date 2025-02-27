const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnSubmit = document.getElementById("btn");
    btnSubmit.addEventListener("click", spaties)
}
const spaties = () => {
    let input = document.getElementById("txtInput").value;
    input = input.replace(/\s/g, "");
    let output = "";
    for (let i = 0; i < input.length; i++) {
        output += input.substring(i, i+1) + " ";
    }
    console.log(output);
}
window.addEventListener("load", setup);