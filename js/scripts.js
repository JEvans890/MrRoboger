window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault(); // Prevent form submission
  
      const userInput = document.querySelector("#userinput").value; // Use # to select element by id and retrieve its value
      const textArray = userInput.split(" "); // Split the user input into an array of words
      const userText = ["1", "2", "3"];
      const Beep = "Beep!"; // Store the strings directly without using innerText
      const Boop = "Boop!";
      const Neighbor = "Won't you be my neighbor?";
      let borogerOutput = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  
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
  
      document.querySelector("p").removeAttribute("hidden"); // Remove the "hidden" attribute from the paragraph
  
      Replacement(); // Call the Replacement function to perform the replacements
  
      return false; // Returning false prevents the form from being submitted
    };
  };
