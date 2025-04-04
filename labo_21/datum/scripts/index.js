const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let day = 24 * 60 * 60 * 1000
    let verjaardag = new Date(2005, 11, 24);
    let vandaag = new Date();
    let tijdTussen = Math.floor((vandaag - verjaardag) / day);
    console.log(tijdTussen + " days");
}
window.addEventListener("load", setup);