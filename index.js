

const container = document.querySelector(".container")


fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=176891f48bc84be2bb20b77f19a6f593")
.then(res => {
    return res.json();
})
.then(data => {
    createCards(data)
    console.log("data")
})

function createCards(data){
    data.articles.forEach(e => {
        const card = document.createElement("div")
        card.classList.add("card")

        const cardLeft = document.createElement("div")
        cardLeft.classList.add("card-left")

        const author = document.createElement("div")
        author.classList.add("author")
        author.innerHTML = e.author

        const title = document.createElement("div")
        title.classList.add("title")
        title.innerHTML = e.title

        const description = document.createElement("div")
        description.classList.add("description")
        description.innerHTML = e.description

        const readMr = document.createElement("a")
        readMr.innerHTML = "Read More"
        readMr.href = e.url
        readMr.classList.add("readMr")

        const cardRight = document.createElement("div")
        cardRight.classList.add("card-right")

        const imgCont = document.createElement("div")
        imgCont.classList.add("img-cont")

        const imgLink = document.createElement("a")
        imgLink.classList.add("img-link")
        imgLink.href = e.url

        const mainImg = document.createElement("img")
        mainImg.classList.add("main-img")
        mainImg.src = e.urlToImage

        cardLeft.append(author,title,description,readMr)
        imgLink.appendChild(mainImg)
        imgCont.appendChild(imgLink)
        cardRight.append(imgCont)

        card.append(cardLeft, cardRight)

        container.appendChild(card)
    });
}