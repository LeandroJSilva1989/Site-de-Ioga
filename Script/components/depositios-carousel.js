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
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-19.9%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-39.8%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('fourth')){
      slides.style.transform = 'translatex(-59.7%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('fifth')){
      slides.style.transform = 'translatex(-79.6%)';
      e.target.classList.add('active');
    }
  }
});
  
