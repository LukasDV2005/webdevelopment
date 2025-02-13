const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let nr1 = document.getElementById("nr1");
    let nr2 = document.getElementById("nr2");
    let txtOutput = document.getElementById("txtOutput");

    let g1 = parseInt(nr1.value, 10);
    let g2 = parseInt(nr2.value, 10);
    let txt = txtInput.value;
    txtOutput.innerHTML = txt.slice(g1,g2);
}

window.addEventListener("load", setup);