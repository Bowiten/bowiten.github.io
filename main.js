// code taken from https://github.com/timberhill/lightdm-webkit2-monoarch

headlines = [
    "learning how to code 10 years too late",
    "i hate web design",
    "i had to use javascript for this bit :(",
    "one of the websites of all time",
    "i shouldve used a website builder",
    "do first, regret later"
]

function setHeadline() {
    index = Math.floor(Math.random() * headlines.length);
    element = document.getElementById("headline")
    element.innerHTML = headlines[index]
}

window.onload = function() {
    setHeadline();
}