
const btnRight = document.querySelector(".btn-arrow-right");
 const btnLeft = document.querySelector(".btn-arrow-left");
 const elements = document.querySelector(".elements");
 let pixels = 0;


 

 btnRight.addEventListener("click", function() {
   pixels = pixels - 675;
   elements.style = `transform: translateX(${pixels}px)`;
   
 });

 btnLeft.addEventListener("click", function() {
   pixels = pixels + 675;
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
      slides.style.transform = "translateX(-22.3%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-44.6%)';
      e.target.classList.add('active');
      
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

// recupera os elementos HTML relevantes
const carousel = document.querySelector('.wrapper-depositions .depositions-carousel');
const prevButton = document.getElementById('previewDepositions');
const nextButton = document.getElementById('nextDepositions');
const btnArrowRigth = document.querySelector('.btn-arrow-right');
const btnArrowLeft = document.querySelector('.btn-arrow-left');

// define o índice inicial do carrossel
let currentSlideIndex = 0;

// adiciona um manipulador de eventos "click" para cada botão
prevButton.addEventListener('click', handlePrevButtonClick);
nextButton.addEventListener('click', handleNextButtonClick);

// define a função para desativar o botão "preview" quando estiver no início e o botão "next" quando estiver no final
function handlePrevButtonClick() {
  currentSlideIndex--;
  updateButtonStates();
}

function handleNextButtonClick() {
  currentSlideIndex++;
  updateButtonStates();
}

function updateButtonStates() {
  if (currentSlideIndex <= 0) {
    // o carrossel está no início, desativa o botão "preview"
    prevButton.disabled = true;
  } else {
    // o carrossel não está no início, ativa o botão "preview"
    prevButton.disabled = false;
    btnArrowRigth.style.color = "#258AFF";
  }

  if (currentSlideIndex >= carousel.children.length - 1) {
    // o carrossel está no final, desativa o botão "next"
    nextButton.disabled = true;
  } else {
    // o carrossel não está no final, ativa o botão "next"
    nextButton.disabled = false;
  }
}

