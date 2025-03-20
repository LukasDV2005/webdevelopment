const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let listItems = document.querySelectorAll("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add("listItem");
        listItems[i].style.color = "red";
    }
    let image = document.createElement("img");
    image.src = "images/garbage_disposal_dog.jpg";
    image.alt = "dog";

    let body = document.querySelector("body");
    body.appendChild(image);
}
window.addEventListener("load", setup);