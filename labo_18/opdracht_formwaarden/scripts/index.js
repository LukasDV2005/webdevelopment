const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnToonRes = document.getElementById("toonRes");
    btnToonRes.addEventListener("click", toonResultaat);
}

const toonResultaat = () => {
    let isRoker = document.getElementById("roker").checked;
    if (isRoker) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    let moedertaal = document.getElementsByName("moedertaal");
    let taalRes = "";
    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked)
            taalRes = "Moedertaal is " + moedertaal[i].value;
    }
    if (taalRes === "") {
        taalRes = "moedertaal niet ingegeven";
    }
    console.log(taalRes);

    let buurland = document.getElementById("buurland");
    let landValue = buurland.value;
    console.log("Favoriete buurland is " + landValue);

    let bestelling = document.querySelector('#bestelling');
    let bestellingValues = Array.from(bestelling.options).filter(option => option.selected).map(option => option.value);
    let bestellingRes = "bestelling bestaat uit " + bestellingValues
    console.log(bestellingRes.replaceAll(","," "));

}

window.addEventListener("load", setup);