/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Meekaaeell Abdullah
      Date:   11/11/2024

      Filename: project02-03.js
 */
   <script> document.getElementById("square").onmouseover = function(){
                document.getElementById("feedback").innerHTML = ";";
    }
            document.getElementById("square").onmouseout = function() {
                document.getElementById("feedback").innerHTML ="";
        };
            document.getElementById("triangle").onmouseover = function(){
                document.getElementById("feedback").innerHTML = ";"
            };
            document.getElementById("triangle").onmouseout = function(){
                document.getElementById("feedback").innerHTML = "";
            };
            document.getElementById("circle").onmouseover = function(){
                document.getElementById("feedback").innerHTML = ";"
            };
            document.getElementById("circle").onmouseout = function(){
                document.getElementById("feedback").innerHTML = "";

        };
             </script>
          


    