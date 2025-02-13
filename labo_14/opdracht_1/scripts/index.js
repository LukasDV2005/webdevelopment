const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    window.alert("I am here");

    let confirmation = window.confirm("Please confirm");

    let something = window.prompt("Write something", "something")

    console.log(confirmation);
    console.log(something);
}
window.addEventListener("load", setup);