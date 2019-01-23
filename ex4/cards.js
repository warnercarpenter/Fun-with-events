//assign html elements to variables
let textArea = document.getElementById("keypress-input")
let cardContainer = document.getElementById("cardContainer")

//set variable to keep up with box number
let boxCounter = 1

//add eventListener to submit button and set up function to create cards
document.getElementById("submitButton").addEventListener("click", function () {
    //store current value in the text area
    text = textArea.value
    //clear textArea
    textArea.value = ""
    //call cardFactory and pass text to it if text is not empty
    if (text.replace(/ /g,"").length != 0) {
        cardFactory(text)
    }
})

//function to make enter key trigger submit button
textArea.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("submitButton").click();
    }
  });

//factory to generate cards and push to DOM
const cardFactory = (contents) => {
    //create container element for card and set attributes
    mainArticle = document.createElement("article")
    mainArticle.setAttribute("class", "card")
    mainArticle.setAttribute("id", `card--${boxCounter}`)
    //create container for text
    textContainer = document.createElement("div")
    //add text to text container
    textContainer.innerHTML = contents
    //add text container to card container
    mainArticle.appendChild(textContainer)
    //create container for button
    buttonContainer = document.createElement("div")
    //add HTML for button to button container
    buttonContainer.innerHTML = `<button id="delete--${boxCounter}">Delete This Card</button>`
    //add button container to card container
    mainArticle.appendChild(buttonContainer)
    //add container for individual card to the larger 
    cardContainer.appendChild(mainArticle)
    //call function to add eventListener to delete button and pass the id to it
    buttonListener(boxCounter)
    //increment the box counter
    boxCounter++
}

//function to add eventListener to delete button
const buttonListener = (cardId) => {
    document.getElementById(`delete--${cardId}`).addEventListener("click", function () {
        cardToRemove = document.getElementById(`card--${cardId}`)
        cardContainer.removeChild(cardToRemove)
    })
}