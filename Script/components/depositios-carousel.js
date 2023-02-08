const btnRight = window.document.querySelector(".btn-arrow-right");
 const btnLeft = window.document.querySelector(".btn-arrow-left");
 const elements = window.document.querySelector(".elements");
 let pixels = 597;

 

 btnRight.addEventListener("click", function() {
   pixels = pixels - 597;
   elements.style = `transform: translateX(${pixels}px)`;
   
 });

 btnLeft.addEventListener("click", function() {
   pixels = pixels + 597;
   elements.style = `transform: translateX(${pixels}px)`;
});



const buttonsWrapper = document.querySelector(".depositions-options");
const slides = document.querySelector(".depositions-carousel");

buttonsWrapper.addEventListener("click", e => {
  
  
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
      document.getElementById("previewDepositions").disable = true;
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-22.3%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-39.8%)';
      e.target.classList.add('active');
      document.getElementById("nextDepositions").disable = true;
    } 
  }
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("depositions-carousel-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}

  
