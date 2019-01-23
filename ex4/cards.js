let textArea = document.getElementById("keypress-input")
let cardContainer = document.getElementById("cardContainer")

let boxCounter = 1

document.getElementById("submitButton").addEventListener("click", function () {
    text = textArea.value
    textArea.value = ""
    cardFactory(text)
})

textArea.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("submitButton").click();
    }
  });

const cardFactory = (contents) => {
    mainArticle = document.createElement("article")
    mainArticle.setAttribute("class", "card")
    mainArticle.setAttribute("id", `card--${boxCounter}`)
    textContainer = document.createElement("div")
    textContainer.innerHTML = contents
    mainArticle.appendChild(textContainer)
    buttonContainer = document.createElement("div")
    buttonContainer.innerHTML = `<button id="delete--${boxCounter}">Delete This Card</button>`
    mainArticle.appendChild(buttonContainer)
    cardContainer.appendChild(mainArticle)
    buttonListener(boxCounter)
    boxCounter++
}

const buttonListener = (cardId) => {
    document.getElementById(`delete--${cardId}`).addEventListener("click", function () {
        cardToRemove = document.getElementById(`card--${cardId}`)
        cardContainer.removeChild(cardToRemove)
    })
}