const global = {
    array: []
}
const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let go = document.getElementById("go");
    go.addEventListener("click", search);
    restore();
}

const search = () => {
    let searchBar = document.getElementById("zoekopdracht").value;
    let search = "";
    let query = searchBar.slice(3);
    let failed = false;
    let title = "";
    if (searchBar.indexOf("/g") !== -1) {
        search = "https://www.google.com/search?q=" + query
        title = "Google"
    } else if (searchBar.indexOf("/y") !== -1) {
        search = "https://www.youtube.com/results?search_query=" + query
        search = search.replaceAll(" ", "+");
        title = "Youtube"
    } else if (searchBar.indexOf("/x") !== -1) {
        search = "https://x.com/hashtag/" + query
        title = "Twitter"
    } else if (searchBar.indexOf("/i") !== -1) {
        search = "https://www.instagram.com/explore/tags/" + query
        title = "Instagram"
    } else if (searchBar === "") {

    } else {
        window.alert("ongeldige waarde ingegeven")
        failed = true;
    }

    if (!failed) {
        let card = document.createElement("div");
        let cardBtn = document.createElement("a")
        let cardTitle = document.createElement("h2");
        let cardInfo = document.createElement("p");
        let cross = document.createElement("input");
        let i = global.array.length;
        let k = Math.floor(i / 3);
        if (i % 3 === 0) {
            let container = document.getElementsByClassName("container")[0];
            let row = document.createElement("div");
            row.classList.add("row");
            let col = document.createElement("div");
            col.classList.add("col-4");

            card.classList.add("card");

            switch (title) {
                case "Google":
                    card.style.backgroundColor = "blue";
                    cardBtn.style.backgroundColor = "red";
                    break;
                case "Youtube":
                    card.style.backgroundColor = "red";
                    cardBtn.style.backgroundColor = "black";
                    break;
                case "Twitter":
                    card.style.backgroundColor = "blue";
                    cardBtn.style.backgroundColor = "black";
                    break;
                default:
                    card.style.backgroundColor = "purple"
                    cardBtn.style.backgroundColor = "orange";
            }

            card.id = "" + i;
            card.style.color = "white";
            card.style.paddingBottom = "5%"
            card.style.paddingLeft = "5%"

            cardBtn.href = "" + search;
            cardBtn.innerText = "GO!";
            cardBtn.style.color = "white";
            cardBtn.style.textDecoration = "none"
            cardBtn.style.padding = "5px";

            cardTitle.innerText = title;
            cardTitle.style.paddingTop = "5px";

            cardInfo.innerText = query;

            cross.type = "button";
            cross.value = "X"
            cross.className = "crossBtn";
            cross.style.float = "right";

            cross.addEventListener("click", delItem);

            card.appendChild(cross);
            card.appendChild(cardTitle);
            card.appendChild(cardInfo);
            card.appendChild(cardBtn);
            col.appendChild(card);
            row.appendChild(col);
            container.appendChild(row);

            let h = {
                title: title,
                text: query,
                url: search
            }
            global.array.push(h);
            let arrayString = JSON.stringify(global.array);
            localStorage.setItem("cards", arrayString);
        } else {
            let row = document.getElementsByClassName("row")[k];
            let col = document.createElement("div");
            col.classList.add("col-4");

            card.classList.add("card");

            switch (title) {
                case "Google":
                    card.style.backgroundColor = "blue";
                    cardBtn.style.backgroundColor = "red";
                    break;
                case "Youtube":
                    card.style.backgroundColor = "red";
                    cardBtn.style.backgroundColor = "black";
                    break;
                case "Twitter":
                    card.style.backgroundColor = "blue";
                    cardBtn.style.backgroundColor = "black";
                    break;
                default:
                    card.style.backgroundColor = "purple"
                    cardBtn.style.backgroundColor = "orange";
            }

            card.id = "" + i;
            card.style.color = "white";
            card.style.paddingBottom = "5%"
            card.style.paddingLeft = "5%"

            cardBtn.href = "" + search;
            cardBtn.innerText = "GO!";
            cardBtn.style.color = "white";
            cardBtn.style.textDecoration = "none"
            cardBtn.style.padding = "5px";

            cardTitle.innerText = title;
            cardTitle.style.paddingTop = "5px";

            cardInfo.innerText = query;

            cross.type = "button";
            cross.value = "X"
            cross.className = "crossBtn";
            cross.style.float = "right";

            cross.addEventListener("click", delItem);

            card.appendChild(cross);
            card.appendChild(cardTitle);
            card.appendChild(cardInfo);
            card.appendChild(cardBtn);
            col.appendChild(card);
            row.appendChild(col);

            let h = {
                title: title,
                text: query,
                url: search
            }
            global.array.push(h);
            let arrayString = JSON.stringify(global.array);
            localStorage.setItem("cards", arrayString);
        }
    }
    window.location.href = search;
}


const restore = () => {
    if (localStorage.getItem("cards")) {
        for (let i = 0; i < JSON.parse(localStorage.getItem("cards")).length; i++) {
            let card = document.createElement("div");
            let cardBtn = document.createElement("a")
            let cardTitle = document.createElement("h2");
            let cardInfo = document.createElement("p")
            let cross = document.createElement("input");
            let k = Math.floor(i / 3);
            let title = JSON.parse(localStorage.getItem("cards"))[i].title;
            let query = JSON.parse(localStorage.getItem("cards"))[i].text;
            let search = JSON.parse(localStorage.getItem("cards"))[i].url;

            if (i % 3 === 0) {
                let container = document.getElementsByClassName("container")[0];
                let row = document.createElement("div");
                row.classList.add("row");
                let col = document.createElement("div");
                col.classList.add("col-4");

                card.classList.add("card");

                switch (title) {
                    case "Google":
                        card.style.backgroundColor = "blue";
                        cardBtn.style.backgroundColor = "red";
                        break;
                    case "Youtube":
                        card.style.backgroundColor = "red";
                        cardBtn.style.backgroundColor = "black";
                        break;
                    case "Twitter":
                        card.style.backgroundColor = "blue";
                        cardBtn.style.backgroundColor = "black";
                        break;
                    default:
                        card.style.backgroundColor = "purple"
                        cardBtn.style.backgroundColor = "orange";
                }

                card.id = "" + i;
                card.style.color = "white";
                card.style.paddingBottom = "5%"
                card.style.paddingLeft = "5%"

                cardBtn.href = "" + search;
                cardBtn.innerText = "GO!";
                cardBtn.style.color = "white";
                cardBtn.style.textDecoration = "none"
                cardBtn.style.padding = "5px";

                cardTitle.innerText = title;
                cardTitle.style.paddingTop = "5px";

                cardInfo.innerText = query;

                cross.type = "button";
                cross.value = "X"
                cross.className = "crossBtn";
                cross.style.float = "right";

                cross.addEventListener("click", delItem);

                card.appendChild(cross);
                card.appendChild(cardTitle);
                card.appendChild(cardInfo);
                card.appendChild(cardBtn);
                col.appendChild(card);
                row.appendChild(col);
                container.appendChild(row);

                let h = {
                    title: title,
                    text: query,
                    url: search
                }
                global.array.push(h);
            } else {
                let row = document.getElementsByClassName("row")[k];
                let col = document.createElement("div");
                col.classList.add("col-4");

                card.classList.add("card");

                switch (title) {
                    case "Google":
                        card.style.backgroundColor = "blue";
                        cardBtn.style.backgroundColor = "red";
                        break;
                    case "Youtube":
                        card.style.backgroundColor = "red";
                        cardBtn.style.backgroundColor = "black";
                        break;
                    case "Twitter":
                        card.style.backgroundColor = "blue";
                        cardBtn.style.backgroundColor = "black";
                        break;
                    default:
                        card.style.backgroundColor = "purple"
                        cardBtn.style.backgroundColor = "orange";
                }

                card.id = "" + i;
                card.style.color = "white";
                card.style.paddingBottom = "5%"
                card.style.paddingLeft = "5%"

                cardBtn.href = "" + search;
                cardBtn.innerText = "GO!";
                cardBtn.style.color = "white";
                cardBtn.style.textDecoration = "none"
                cardBtn.style.padding = "5px";

                cardTitle.innerText = title;
                cardTitle.style.paddingTop = "5px";

                cardInfo.innerText = query;

                cross.type = "button";
                cross.value = "X"
                cross.className = "crossBtn";
                cross.style.float = "right";

                cross.addEventListener("click", delItem);

                card.appendChild(cross);
                card.appendChild(cardTitle);
                card.appendChild(cardInfo);
                card.appendChild(cardBtn);
                col.appendChild(card);
                row.appendChild(col);

                let h = {
                    title: title,
                    text: query,
                    url: search
                }
                global.array.push(h);
            }
        }
    }
}

const delItem = (event) => {
    let deletedNr = parseInt(event.target.parentElement.id);
    let localArray = JSON.parse(localStorage.getItem("cards"));
    event.target.parentElement.remove();
    localArray.splice(deletedNr, 1);
    localStorage.setItem("cards", JSON.stringify(localArray));
    global.array.splice(deletedNr, 1);
    for (let i = deletedNr + 1; i < localStorage.getItem("cards").length; i++) {
        let nextCard = document.getElementById("" + i);
        if (nextCard) {
            nextCard.id = "" + (i - 1);
        }
    }
}

window.addEventListener("load", setup);