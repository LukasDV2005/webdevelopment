let personen = [

];
let global = {
    lastClicked: -1
}

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    let errors = document.getElementsByClassName("errorMessage");
    let error = false;
    for (let i = 0; i < errors.length && error === false; i++) {
        if (error === false && errors[i].innerHTML !== "") {
            error = true;
        }
    }
    // indien ok, bewaar de ingegeven data.


    // een nieuw aangemaakte persoon voegen we toe
    if(error === false) {
        
        let txtVoornaam = document.getElementById("txtVoornaam").value;
        let txtFamilienaam = document.getElementById("txtFamilienaam").value;
        let txtGeboortedatum = document.getElementById("txtGeboorteDatum").value;
        let txtEmail = document.getElementById("txtEmail").value;
        let txtAantalKinderen = document.getElementById("txtAantalKinderen").value;

        let persoon = {
            voornaam: txtVoornaam,
            familienaam: txtFamilienaam,
            geboorteDatum: txtGeboortedatum,
            email: txtEmail,
            aantalKinderen: txtAantalKinderen
        }

        if (global.lastClicked === -1) {

            let option = document.createElement("option");
            let i = personen.length;
            option.id = "" + i;
            option.value = persoon.voornaam + " " + persoon.familienaam;
            option.innerText = persoon.voornaam + " " + persoon.familienaam;
            let select = document.getElementById("lstPersonen");
            select.appendChild(option)
            personen.push(persoon);
            global.lastClicked = i;
        } else {
            let i = global.lastClicked;
            let option = document.getElementById(i)
            personen.splice(i, 1, persoon);
            option.value = persoon.voornaam + " " + persoon.familienaam;
            option.innerText = persoon.voornaam + " " + persoon.familienaam;
        }
    }
    // een bestaande persoon in de lijst passen we aan
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {

    console.log("Klik op de knop nieuw");
    global.lastClicked = -1;
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboortedatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtVoornaam.value = "";
    txtFamilienaam.value = "";
    txtGeboortedatum.value = "";
    txtEmail.value = "";
    txtAantalKinderen.value = "";

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

toonData = (event) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboortedatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    global.lastClicked = document.getElementById("lstPersonen").selectedIndex
    let i = global.lastClicked;
    let persoon = personen[i];
    txtVoornaam.value = persoon.voornaam;
    txtFamilienaam.value = persoon.familienaam;
    txtGeboortedatum.value = persoon.geboorteDatum;
    txtEmail.value = persoon.email;
    txtAantalKinderen.value = persoon.aantalKinderen;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonData);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);