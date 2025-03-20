const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let sliders = document.getElementsByClassName("slider");
    let theCube = document.getElementsByClassName("theCube");
    let save = document.getElementById("save");
    for (let i = 0; i < 3; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    theCube[0].style.backgroundColor = "rgb(128,128,128)";
    save.addEventListener("click", store);
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let r = document.getElementById("r");
    let g = document.getElementById("g");
    let b = document.getElementById("b");
    let theCube = document.getElementsByClassName("theCube");
    for (let i = 0; i < sliders.length; i++) {
        let value =sliders[i].value;
        if (i === 0) {
            r.innerText = "Red " + value;
        }
        else if (i === 1) {
            g.innerText = "Green " + value;
        } else {
            b.innerText = "Blue " + value;
        }
    }
    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;
    theCube[0].style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}

const store = () => {
    let node = document.createElement("aside");
    let sliders = document.getElementsByClassName("slider");
    let cross = document.createElement("input");
    node.classList.add("theCube");
    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;
    node.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    cross.type = "button";
    cross.value = "X"
    cross.className = "crossBtn";
    cross.style.float = "right";
    cross.addEventListener("click", delItem);
    node.appendChild(cross);
    let element = document.getElementById("saves");
    element.appendChild(node);
}

const delItem = (event) => {
    event.target.parentElement.remove();
}

window.addEventListener("load", setup);