const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let text = document.querySelectorAll("p");
    text[0].innerText = "Good Job!";
}
window.addEventListener("load", setup);