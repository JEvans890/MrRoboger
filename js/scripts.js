window.onload = function();
let form = document.querySelector("form");
form.onsubmit = function(event) {
    const userInput = document.querySelector("userinput");
    const textArray = text.split(" ");
    const userText = ["1", "2", "3"];
    const Beep = document.innerText("Beep!");
    const Boop = document.innerText("Boop!");
    const Neighbor = document.innerText("Won't you be my neighbor?");
    let borogerOutput = ["Beep!", "Boop!", "Won't you be my neighbor?"];
        let Replacement() {
        if (userInput.includes.innerText("1")) {
            userInput.replaceWith(Beep);
        }
        if (userInput.includes.innerText("2")) {
            userInput.replaceWith(Boop);
        }
        if (userInput.includes.innerText("3")) {
            userInput.replaceWith(Neighbor);
        }
        };
    return Replacement;
    document.querySelector("p").removeAttribute("hidden");
    event.preventDefault();
}