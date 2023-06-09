window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
  
        const userInput = document.querySelector("#userinput").value;
        const textArray = userInput.split(" ");
      const userText = ["1", "2", "3"];
      const Beep = "Beep!"; 
      const Boop = "Boop!";
      const Neighbor = "Won't you be my neighbor?";
      let borogerOutput() = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  
      // Define a function instead of using let and parentheses
      function Replacement() {
        if (userText.includes("1")) {
          document.querySelector("p").textContent = Beep; // Use textContent to set the paragraph's text
        }
        if (userText.includes("2")) {
          document.querySelector("p").textContent = Boop;
        }
        if (userText.includes("3")) {
          document.querySelector("p").textContent = Neighbor;
        }
      }
      textArray.forEach(userText(Replacement) {
        const char1 = Replacement[0].toLowerCase();
        if (_userInput(userText).includes(char1)) {
            elementsWVowels.push(Replacement)
        }
    })
    return elementsWVowels;
}
  
    //document.querySelector("p").removeAttribute("hidden"); // Remove the "hidden" attribute from the paragraph
  
    Replacement(); // Call the Replacement function to perform the replacements
  
    // then we show the story by removing the class attribute
    document.querySelector("p").removeAttribute("class");
    // we prevent the default refresh action for the submit event
    event.preventDefault();
    };
  };
