const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let sliders = document.getElementsByClassName("slider");
    let theCube = document.getElementsByClassName("theCube")
    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);

    theCube[0].style.backgroundColor = "rgb(128,128,128)";
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let r = document.getElementById("r");
    let g = document.getElementById("g");
    let b = document.getElementById("b");
    let theCube = document.getElementsByClassName("theCube");
    for (let i = 0; i < sliders.length; i++) {
        let value =sliders[i].value;
        if (i == 0) {
            r.innerHTML = "Red " + value;
        }
        else if (i == 1) {
            g.innerHTML = "Green " + value;
        } else {
            b.innerHTML = "Blue " + value;
        }
    }
    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value
    theCube[0].style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}

window.addEventListener("load", setup);