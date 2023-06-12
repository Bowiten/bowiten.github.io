headlines = [
    "learning how to code 10 years too late",
    "i hate web design",
    "i had to use javascript for this bit :("
]

function setHeadline() {
    index = Math.floor(Math.random() * headlines.length);
    element = document.getElementById("headline")
    element.innerHTML = headlines[index]
}

window.onload = function() {
    setHeadline();
}