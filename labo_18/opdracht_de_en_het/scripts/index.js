const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel"
    while (tekst.indexOf(" de ") != -1) {
        tekst = tekst.substring(0, tekst.indexOf(" de ")) + " het " + tekst.substring(tekst.indexOf(" de ")+4)
    }
    console.log(tekst);
}
window.addEventListener("load", setup);