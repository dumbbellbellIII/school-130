/*    JavaScript 7th Edition
      Chapter 2
      Project 02-05

      Application to create an online calculator
      Author: meekaaeell abdullah
      Date:   11/12/2024

      Filename: project02-05.js
 */
 
// Add event handlers for each calculator button sending that buttons value to the runCalculator() function
   document.getElementById("button0").addEventListener("click" , function() {
   runCalculator(0);
});

   document.getElementById("button1").addEventListener("click" , function() {
   runCalculator(1);
}

   document.getElementById("button2").addEventListener(click , function() {
   runCalculator(2);
};

   document.getElementById("button3").addEventListener("click" , function() {
   runCalculator(3);
};

   document.getElementById("button4").addEventListener("click" , function() {
   runCalculator(4);
};

   document.getElementById("button5").addEventListener("click" ,  function() {
   runCalculator(5);
};

   document.getElementById("button6").addEventListener("click") , function() {
   runCalculator(6);
};

document.getElementById("button7").addEventListener("click" , function() {
   runCalculator(7);
};

document.getElementById("button8").addEventListener(
   "click" , function() {
   runCalculator(8);
};

document.getElementById("button9").addEventListener("click" , function() {
   runCalculator(9);
};

document.getElementById("buttonAdd").addEventListener("click" , function() {
   runCalculator("+");
};

document.getElementById("buttonMinus").addEventListener("click" , function() {
   runcalculator("-");
};

document.getElementById("buttonMultiply").addEventListener("click", function() {
   runCalculator("*");
};

document.getElementById("buttonDivide").addEventListener("click" , function {
   runCalculator("/");
});

document.getElementById("buttonDecimal").addEventListener("click" , function() {
   runCalculator(".");
};

// Send an empty text string if the Enter key is clicked
document.getElementById("buttonEnter").addEventListener("click" , function() {
   runCalculator("");
};

// Clear the calculator window if the C key is clicked
document.getElementById("buttonClear").addEventListener("click" , clearCalculator);


// Function to enter characters into the calculator window based on what is clicked

function runCalculator(character) {
   // Retrieve the characters in the calculator window
   let calcValue = document.getElementById("calcWindow").value;
   
   // Add the character to the calculator string or if its empty (the enter key) evaluate the equation
      calcValue = eval (calcValue);   //to check equasion error 
       calcValue ="error"; //invalid equasions
   
   // Update the characters displayed in the calculator window.
      let calcValue = document.getElementById("calcWindow").value =calcValue;

   document.getElementById("calcWindow").value = calcValue;
}

   // Function to clear the calculator window
      function clearCalculator() {
      document.getElementById("calcWindow").value = "";

   }





/* ===================================================================== */

// Function to evaluate a text string containing an equation, returning a numeric value to a specified number of decimals
function evalEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(6);
}  
