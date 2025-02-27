const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnSubmit = document.getElementById("btn");
    btnSubmit.addEventListener("click", spaties)
}
const maakMetSpaties = () => {
    let input = document.getElementById("txtInput").value;
    input = input.replace(/\s/g, "");
    let result = "";
    for (let i = 0; i < input.length; i++) {
        result += input.substring(i, i+1) + " ";
    }
    return result;
}

const spaties = () => {
    console.log(maakMetSpaties());
}

window.addEventListener("load", setup);