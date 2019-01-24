//function for toggling classes
const toggleClass = (section) => {
    section.classList.toggle("disabled")
    section.classList.toggle("enabled")
}

//setting HTML elements to variables
flightSection = document.getElementById("flight")
mindReadingSection = document.getElementById("mindreading")
xraySection = document.getElementById("xray")
allSections = document.querySelectorAll("section")

//set up event listeners that call toggleClass function
document.querySelector("#activate-flight").addEventListener("click", function () {
    toggleClass(flightSection)
})
document.querySelector("#activate-mindreading").addEventListener("click", function () {
    toggleClass(mindReadingSection)
})
document.querySelector("#activate-xray").addEventListener("click", function () {
    toggleClass(xraySection)
})

//set up event for activate all that toggles enabled and disabled for each element that is not currently enabled
document.querySelector("#activate-all").addEventListener("click", function () {
    allSections.forEach(
        function (element) {
            if (element.classList.contains("enabled") === false) {
                element.classList.toggle("disabled")
                element.classList.toggle("enabled")
            }
        }
    )
})

//set up event for disable all that toggles enabled and disabled for each element that is not currently disabled
document.querySelector("#deactivate-all").addEventListener("click", function () {
    allSections.forEach(
        function (element) {
            if (element.classList.contains("enabled") === true) {
                element.classList.toggle("disabled")
                element.classList.toggle("enabled")
            }
        }
    )
})