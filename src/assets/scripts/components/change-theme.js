
function changeTheme() {
   var element = document.getElementById("darkBg");
   element.classList.toggle("dark");

   var myCheck = document.getElementById("myCheck");
   var img = document.querySelector("#menu-dark");

   if (myCheck.checked === true) {
      img.setAttribute('src', 'https://leandrojsilva1989.github.io/Site-de-Ioga/src/assets/images/list-dark.png');
   } else {
      img.setAttribute('src', 'https://leandrojsilva1989.github.io/Site-de-Ioga/src/assets/images/list-menu.png');
   }


}
