const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = document.getElementById("txtOutput");
    tekst.innerHTML = txtInput.value;
}

window.addEventListener("load", setup);