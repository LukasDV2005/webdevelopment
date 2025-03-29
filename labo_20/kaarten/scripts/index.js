let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    array_kaart:[],
    isBusy: false
};
const setup = () => {

    for (let i = 0, len = global.AANTAL_KAARTEN; i < len; i++) {
        global.array_kaart.push("images/kaart" + (1+i) +".png");
        global.array_kaart.push("images/kaart" + (1+i) +".png");
    }
    addCards();
    addEvents();

    global.array_kaart.sort(() => Math.random() - 0.5);
}
const addCards =() => {
    for(let i = 0, len = global.AANTAL_KAARTEN*2; i < len; i++) {
        let div = document.createElement("div");
        div.classList.add("kaart");
        div.innerHTML = "<img src='images/achterkant.png' alt=" +i+ "/>"
        let playField = document.getElementsByClassName("playField");
        playField[0].appendChild(div);
    }
}
const addEvents = () => {
    let img = document.getElementsByClassName("kaart");
    for (let i = 0, len = img.length; i < len; i++) {
        img[i].addEventListener("click", flipCard);
    }
}
const removeEvents = () => {
    let img = document.getElementsByClassName("kaart");
    for (let i = 0, len = img.length; i < len; i++) {
        img[i].removeEventListener("click", flipCard);
    }
}
const flipCard = () => {

    if ((!event.target.classList.contains("hidden") || event.target.getAttribute("src") !== "images/achterkant.png") && !global.isBusy) {
        removeEvents();
        let child = event.target;
        let position = child.getAttribute("alt")
        child.src = global.array_kaart[parseInt(position)];
        event.stopPropagation()
        checkDubbels()
        addEvents()
    }
}
const checkDubbels = () => {
    let img = document.getElementsByTagName('img');
    let img1 = null;
    let img2 = null;
    for (let i = 0, len = img.length; i < len; i++) {
        if ((img[i].getAttribute("src") !== "images/achterkant.png") && !img[i].classList.contains('hidden')) {
            if (img1 === null) {
                img1 = img[i];
            } else {
                img2 = img[i];
            }
        }
    }
    if (img1 === null || img2 === null) {
    } else if (img1.getAttribute("src") === img2.getAttribute("src")) {
        global.isBusy = true;
        img1.classList.add('correct');
        img2.classList.add('correct');
        let audio = new Audio("audio/blip-131856.mp3");
        audio.play();
        setTimeout(function () {
            img1.classList.remove("correct");
            img2.classList.remove("correct");
            img1.classList.add('hidden');
            img2.classList.add('hidden');
            global.isBusy = false;
        }, 750);
    } else {
        global.isBusy = true;
        img1.classList.add('wrong');
        img2.classList.add('wrong');
        let audio = new Audio("audio/beep-beep-6151.mp3")
        audio.play();
        setTimeout(function () {
            img1.classList.remove('wrong');
            img2.classList.remove('wrong');
            img1.src = "images/achterkant.png";
            img2.src = "images/achterkant.png";
            global.isBusy = false;
        }, 750);
    }

}

window.addEventListener("load", setup);