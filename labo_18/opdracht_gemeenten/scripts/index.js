const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let gemeenteList = document.getElementById("gemeenteList");
    let gemeente = "";
    const arrayGemeentes = [];
    while (gemeente !== "stop") {
        gemeente = window.prompt("geef een gemeente op:", "gemeente");
        if (gemeente !== "stop") {
            arrayGemeentes.push(gemeente);
        }
    }
    arrayGemeentes.sort()
    for (let i = 0; i < arrayGemeentes.length; i++) {
        let opt = document.createElement('option');
        opt.value = arrayGemeentes[i];
        opt.innerHTML = arrayGemeentes[i];
        gemeenteList.appendChild(opt);
    }
}
window.addEventListener("load", setup);