const setup = () => {
    let btnValideer = document.getElementById("valideer");
    btnValideer.addEventListener("click", valideer)
};

const valideer = () => {
    valideerVnaam();
    valideerFnaam();
    valideerGeboorte();
    valideerEmail();
    valideerKinderen();
}

const valideerVnaam = () => {
    let txtVnaam = document.getElementById("txtVnaam");
    let vnaam = txtVnaam.value.trim();
    // We gebruiken nu de kennis dat de error span net na het input veld komt.
    // Het is dus niet meer nodig om die een id te geven, noch om het element hier op te zoeken.
    if (vnaam.length > 30) {
        reportError(txtVnaam, "max. 30 karakters");
    } else {
        clearError(txtVnaam);
    }
};

const valideerFnaam = () => {
    let txtFnaam = document.getElementById("txtFnaam");
    let fnaam = txtFnaam.value.trim();
    // We gebruiken nu de kennis dat de error span net na het input veld komt.
    // Het is dus niet meer nodig om die een id te geven, noch om het element hier op te zoeken.
    if (fnaam.length > 50) {
        reportError(txtFnaam, "max. 50 karakters");
    } else if (fnaam.length === 0) {
        reportError(txtFnaam, "verplicht veld");
    } else {
        clearError(txtFnaam);
    }
};

const valideerGeboorte = () => {
    let txtGeboorte = document.getElementById("txtGeboorte");
    let geboorte = txtGeboorte.value.trim();
    if (geboorte.match(/(?:19|20)[0-9]{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9]|3[0-1])/)) {
        clearError(txtGeboorte);
    } else if (geboorte === "") {
        reportError(txtGeboorte, "verplicht veld");
    } else {
        reportError(txtGeboorte, "formaat is niet jjjj-mm-dd");
    }
}

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let email = txtEmail.value.trim();
    if (email.match(/(.+@.+)/)) {
        clearError(txtEmail);
    } else if (email === ""){
        reportError(txtEmail, "verplicht veld");
    } else {
        reportError(txtEmail, "geen geldig email adres");
    }
}

const valideerKinderen = () => {
    let txtKinderen = document.getElementById("txtKinderen");
    let kinderen = txtKinderen.value.trim();
    if (kinderen.indexOf("-") === -1) {
        if (kinderen.match(/([1-9][0-9]{2,})/)) {
            reportError(txtKinderen, "is te vruchtbaar")
        } else if (kinderen.match(/([0-9]|[1-9][0-9])/)) {
            clearError(txtKinderen)
        } else {
            reportError(txtKinderen, "is geen positief getal")
        }
    } else {
        reportError(txtKinderen, "is geen positief getal")
    }
}

const reportError = (element, message) => {
    // als je deze gebruikt, behoeft het error element natuurlijk geen id attribuute
    element.className="invalid";
    element.nextElementSibling.innerHTML = message; // LET OP : nextSibling zou niet werken, die geeft een text node (d.i. immers de next sibling)
};

const clearError = (element) => {
    // als je deze gebruikt, behoeft het error element natuurlijk geen id attribuute
    element.className="";
    element.nextElementSibling.innerHTML = "";
};

window.addEventListener("load", setup);