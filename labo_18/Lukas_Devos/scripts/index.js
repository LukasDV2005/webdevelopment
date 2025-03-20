const setup = () => {
    let staat = document.getElementById("staat");
    staat.addEventListener("change", veranderStaat);
}

const veranderStaat = () => {
    let staat = document.getElementById("staat")
    let curStaat = staat.value;
    let note = document.getElementById("note");
    let image = document.getElementById("img");
    let letter = document.getElementById("letter");
    let curLetter = letter.value;

    image.classList.remove("hidden");
    if(curStaat === "zonder een ei") {
        image.classList.remove("with-egg");
    } else {
        image.classList.add("with-egg");
    }


    if (curLetter !== "") {
    let zin = "kip en ei staat van de kip: " + curStaat;
    let aantal = 0;
    let position = 0;
    while (position !== -1) {
        position = zin.indexOf(curLetter, position+1);
        if (position !== -1) {
            aantal++;
        }
        note.innerHTML = "Hierboven, een kip " + curStaat +'.\n Letter "' + curLetter + '" komt ' + aantal + " keer voor in bovenstaande zin";

    }
    }


}



window.addEventListener("load", setup);
