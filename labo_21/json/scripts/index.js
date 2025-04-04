const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let student1={
        voornaam : "Tim",
        familienaam : "Othulhu",
        geboorteDatum : new Date("1993-12-31"),
        adres : {
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Potoooooooo"],
        aantalAutos : 2
    }
    let json = JSON.stringify(student1)
    console.log(json)
}
window.addEventListener("load", setup);