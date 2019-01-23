const toggleClass = (section) => {
    section.classList.toggle("disabled")
    section.classList.toggle("enabled")
}

flightSection = document.getElementById("flight")
mindReadingSection = document.getElementById("mindreading")
xraySection = document.getElementById("xray")
allSections = document.querySelectorAll("section")

console.log(allSections)

document.querySelector("#activate-flight").addEventListener("click", function () {
    toggleClass(flightSection)
})
document.querySelector("#activate-mindreading").addEventListener("click", function () {
    toggleClass(mindReadingSection)
})
document.querySelector("#activate-xray").addEventListener("click", function () {
    toggleClass(xraySection)
})
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
