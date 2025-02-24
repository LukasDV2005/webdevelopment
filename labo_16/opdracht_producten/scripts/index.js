const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnHerbereken = document.getElementById("btnHerbereken");
    btnHerbereken.addEventListener("click", herbereken);
}

const herbereken = () => {
    let nr = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let prijs = document.getElementsByClassName("prijs");
    let subOutput = document.getElementsByClassName("subtotaal");
    let output = document.getElementById("totaal");

    let g1 = parseFloat(nr[0].value);
    let g2 = parseFloat(nr[1].value);
    let g3 = parseFloat(nr[2].value);
    let p1 = Number.parseFloat(btw[0].innerHTML);
    let p2 = Number.parseFloat(btw[1].innerHTML);
    let p3 = Number.parseFloat(btw[2].innerHTML);
    let pr1 = Number.parseFloat(prijs[0].innerHTML);
    let pr2 = Number.parseFloat(prijs[1].innerHTML);
    let pr3 = Number.parseFloat(prijs[2].innerHTML);

    let out1 = pr1 * g1 + pr1 * g1 * p1/100;
    let roundedOut1 = out1.toFixed(2)
    subOutput[0].innerHTML = roundedOut1 + " Eur";

    let out2 = pr2 * g2 + pr2 * g2 * p2/100;
    let roundedOut2 = out2.toFixed(2)
    subOutput[1].innerHTML = roundedOut2 + " Eur";

    let out3 = pr3 * g3 + pr3 * g3 * p3/100;
    let roundedOut3 = out3.toFixed(2)
    subOutput[2].innerHTML = roundedOut3 + " Eur";

    let total = out1 + out2 + out3;
    let roundedTotal = total.toFixed(2)
    output.innerHTML = roundedTotal + " Eur";
}
window.addEventListener("load", setup);