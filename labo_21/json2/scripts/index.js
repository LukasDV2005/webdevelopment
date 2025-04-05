const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let student1 = JSON.parse('{"voornaam":"Tim","familienaam":"Othulhu","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Potoooooooo"],"aantalAutos":2}');
    console.log(student1);
    console.log(student1.voornaam);
}
window.addEventListener("load", setup);