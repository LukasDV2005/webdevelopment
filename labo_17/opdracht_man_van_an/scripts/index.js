const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let manVanAn = "De man van An geeft geen hand aan ambetante verwanten";
    let an = "an";
    let aantal = 0;
    let position = 0;
    while (position !== -1) {
        position = manVanAn.indexOf(an, position+1);
        if (position !== -1) {
            aantal++;
        }
    }
    console.log(aantal);

    let aantalLast = 0;
    let positionLast = manVanAn.length-1;
    while (positionLast !== -1) {
        positionLast = manVanAn.lastIndexOf(an, positionLast-1);
        if (positionLast !== -1) {
            aantalLast++;
        }
    }
    console.log(aantalLast);
}
window.addEventListener("load", setup);