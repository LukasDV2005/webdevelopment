const setup = () => {

}
const button = (i) => {
    let color = "";

    if (window.getComputedStyle(document.getElementsByClassName("button")[i], null).getPropertyValue('background-color') == "rgb(255, 255, 255)") {


        switch (i) {
            case 0:
                color = "blue";
                break;
            case 1:
                color = "red";
                break;
            case 2:
                color = "green";
                break;
        }

    }
    else
    {
        color = "white";
    }



    document.getElementsByClassName("button")[i].style.backgroundColor= color;

}
window.addEventListener("load", setup);