const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let tekst = "onoorbaar"
    let i = 0;
    while (i < tekst.length-2) {
        console.log(tekst.substring(i,i+3));
        i = i + 1;
    }
}
window.addEventListener("load", setup);