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


      function changeTheme(get) {
        // Get the checkbox
        var checkBox = document.getElementById("myCheck");
        // Get the output text
        var text = document.getElementById("text");
      
        // If the checkbox is checked, display the output text
        if (checkBox.checked === true){
            get.text.style.display = "block";
        } else {
          get.text.style.display = "none";
        }
      }
