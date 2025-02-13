const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    const theArray = ['Temmie', 'Exodia', 'Slifer the Sky Dragon', 'Juan', 'Biggie Cheese'];
    console.log(theArray.length);
    for (let i = 0; i < theArray.length; i = i + 2) {
        console.log(theArray[i]);
    }

    function voegNaamToe() {
        theArray.push(window.prompt());
    }

    console.log(theArray);

    voegNaamToe();

    console.log(theArray);

    console.log(theArray.toString());


}
window.addEventListener("load", setup);



