let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,
// aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    let start = document.getElementById("start");
    start.addEventListener("click", initialize);


};

const initialize = () => {
    let image = document.getElementById("bomb");
    image.addEventListener("click", hit);
    setInterval(message, 1000)

}

const hit = () => {
    let image = document.getElementById("bomb");
    let score = document.getElementById("scoreboard");
    if (image.getAttribute("src") === "images/0.png") {
        window.alert("You got absolutely eviscerated");
        global.score = 0;
    } else {
        global.score += 1;
        message();
    }
    score.innerText = "score: " + global.score;
}

const message = () => {
    console.log("aeiou")
    let image = document.getElementById("bomb");
    let x = Math.random() * 600;
    let y = Math.random() * 800;
    image.style.marginTop = x + "px";
    image.style.marginLeft = y + "px";
    let changeImg = (Math.floor(Math.random() * global.IMAGE_COUNT));
    image.src = global.IMAGE_PATH_PREFIX + changeImg + global.IMAGE_PATH_SUFFIX;
}


window.addEventListener("load", setup);


