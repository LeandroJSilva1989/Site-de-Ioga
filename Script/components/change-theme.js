/*var dark = document.getElementById("dark");
var text = document.getElementById("text");

      dark.addEventListener( "change", () => {
         if ( dark.checked === true) {
            text.innerHTML = " Check box is checked. ";
         } else {
            text.innerHTML = "";
         }
      });
*/

       // Get the checkbox
       var checkBox = document.getElementById("myCheck");
       // Get the output text
       var text = document.getElementById("text");


      function changeTheme(Click) {
       
      
        // If the checkbox is checked, display the output text
        if (checkBox.checked === true) {
            text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      }

      function mudaTema() {
         document.body.classList.toggle("dark");
       }
