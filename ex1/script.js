// assign HTML elements to variables
let fieldEl = document.getElementById("keypress-input")
let article1 = document.getElementById("article1")
let article2 = document.getElementById("article2")

// function to mirror text
fieldEl.addEventListener("keyup", function (event) {
    article1.textContent = event.target.value
    article2.textContent = event.target.value
})