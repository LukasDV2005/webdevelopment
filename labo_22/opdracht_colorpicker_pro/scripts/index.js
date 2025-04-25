const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let sliders = document.getElementsByClassName("slider");
    let theCube = document.getElementsByClassName("theCube");
    let r = document.getElementById("r");
    let g = document.getElementById("g");
    let b = document.getElementById("b");
    let save = document.getElementById("save");
    for (let i = 0; i < 3; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    for (let i = 0; i<sliders.length; i++) {
        sliders[i].value = localStorage.getItem("slider " + i);
    }
    let red = localStorage.getItem("slider 0");
    let green = localStorage.getItem("slider 1");
    let blue = localStorage.getItem("slider 2");
    r.innerText = "Red " + red;
    g.innerText = "Green " + green;
    b.innerText = "Blue " + blue;
    theCube[0].style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    restore();
    save.addEventListener("click", store);
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let r = document.getElementById("r");
    let g = document.getElementById("g");
    let b = document.getElementById("b");
    let theCube = document.getElementsByClassName("theCube");
    for (let i = 0; i < sliders.length; i++) {
        let value = sliders[i].value;
        if (i === 0) {
            r.innerText = "Red " + value;
        }
        else if (i === 1) {
            g.innerText = "Green " + value;
        } else {
            b.innerText = "Blue " + value;
        }
    }
    for (let i = 0; i<sliders.length; i++) {
        localStorage.setItem(("slider " + i), sliders[i].value)
    }
    let red = localStorage.getItem("slider 0");
    let green = localStorage.getItem("slider 1");
    let blue = localStorage.getItem("slider 2");
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
    if (localStorage.getItem("nodes")) {
        let i = parseInt(localStorage.getItem("nodes")) + 1
        localStorage.setItem("nodes", ("" + i));
    } else {
        localStorage.setItem("nodes", "1");
    }
    localStorage.setItem(("red " + localStorage.getItem("nodes")), red);
    localStorage.setItem(("green " + localStorage.getItem("nodes")), green);
    localStorage.setItem(("blue " + localStorage.getItem("nodes")), blue);
    node.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    node.id = "" + parseInt(localStorage.getItem("nodes"));
    cross.type = "button";
    cross.value = "X"
    cross.className = "crossBtn";
    cross.style.float = "right";
    cross.addEventListener("click", delItem);
    node.addEventListener("click", pickColor)
    node.appendChild(cross);
    let element = document.getElementById("saves");
    element.appendChild(node);
}

const restore = () => {
    if (localStorage.getItem("nodes")) {
        for (let i = 1; i<=localStorage.getItem("nodes"); i++) {
            let node = document.createElement("aside");
            let cross = document.createElement("input");
            node.classList.add("theCube");
            let red = localStorage.getItem(("red " + i));
            let green = localStorage.getItem(("green " + i));
            let blue = localStorage.getItem(("blue " + i));
            node.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
            node.id = "" + i;
            cross.type = "button";
            cross.value = "X"
            cross.className = "crossBtn";
            cross.style.float = "right";
            cross.addEventListener("click", delItem);
            node.addEventListener("click", pickColor);
            node.appendChild(cross);
            let element = document.getElementById("saves");
            element.appendChild(node);
        }

    }

}

const delItem = (event) => {
    let deletedNr = parseInt(event.target.parentElement.id);
    localStorage.removeItem("red " + deletedNr);
    localStorage.removeItem("green " + deletedNr);
    localStorage.removeItem("blue " + deletedNr);
    for (let i = deletedNr + 1; i <= localStorage.getItem("nodes"); i++) {
        localStorage.setItem(("red " + (i - 1)), localStorage.getItem(("red " + i)));
        localStorage.setItem(("green " + (i - 1)), localStorage.getItem(("green " + i)));
        localStorage.setItem(("blue " + (i - 1)), localStorage.getItem(("blue " + i)));
        localStorage.removeItem(("red " + i));
        localStorage.removeItem(("green " + i));
        localStorage.removeItem(("blue " + i));
        let nextNode = document.getElementById(("" + i))
        nextNode.id = "" + (i - 1);
    }
    let newNodes = parseInt(localStorage.getItem("nodes")) - 1;
    localStorage.setItem("nodes", ("" + newNodes))
    event.target.parentElement.remove();
    event.stopPropagation();
}

const pickColor = (event) => {
    document.getElementsByClassName("theCube")[0].style.backgroundColor = event.target.style.backgroundColor;
    let idColor = parseInt(event.target.id);
    let sliders = document.getElementsByClassName("slider");
    let r = document.getElementById("r");
    let g = document.getElementById("g");
    let b = document.getElementById("b");
    r.innerText = "Red " + localStorage.getItem(("red " + idColor));
    g.innerText = "Green " + localStorage.getItem(("green " + idColor));
    b.innerText = "Blue " + localStorage.getItem(("blue " + idColor));
    sliders[0].value = localStorage.getItem("red " + idColor);
    sliders[1].value = localStorage.getItem("green " + idColor);
    sliders[2].value = localStorage.getItem("blue " + idColor);
    for (let i = 0; i<sliders.length; i++) {
        localStorage.setItem(("slider " + i), sliders[i].value)
    }
    event.stopPropagation();
}

window.addEventListener("load", setup);