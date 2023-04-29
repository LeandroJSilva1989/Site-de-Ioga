
const btnRight = document.querySelector(".btn-arrow-right");
const btnLeft = document.querySelector(".btn-arrow-left");
const elements = document.querySelector(".elements");
let pixels = 0;




btnRight.addEventListener("click", function () {
  pixels = pixels - 22.3;
  elements.style = `transform: translateX(${pixels}%)`;

});

btnLeft.addEventListener("click", function () {
  pixels = pixels + 22.3;
  elements.style = `transform: translateX(${pixels}%)`;
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
    } else if (e.target.classList.contains('third')) {
      slides.style.transform = 'translatex(-44.6%)';
      e.target.classList.add('active');

    }

  }
});



const prevButton = document.getElementById('previewDepositions');
const nextButton = document.getElementById('nextDepositions');


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
/*
function currentSlide(n) {
  showSlides(slideIndex = n);
  updateButtonStates();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("depositions-carousel-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
*/


// recupera os elementos HTML relevantes
const carousel = document.querySelector('.wrapper-depositions .depositions-carousel');


// define o índice inicial do carrossel
let currentSlideIndex = 0;
updateButtonStates();



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




// define a função para atualizar o estado dos botães
function updateButtonStates() {
 
  if (currentSlideIndex <= 0) {
    // o carrossel está no início, desativa o botão "preview"
    updateButtonStates()

  } else {
    // o carrossel não está no início, ativa o botão "preview"
    prevButton.disabled = false;

  }

  if (currentSlideIndex >= carousel.children.length - 1) {
    // o carrossel está no final, desativa o botão "next"
    nextButton.disabled = true;

  } else {
    // o carrossel não está no final, ativa o botão "next"
    nextButton.disabled = false;

  }
}

function currentSlide(n) {
  let slides = document.getElementsByClassName("deposition-slides");
  let dots = document.getElementsByClassName("dot");
  let previewBtn = document.getElementById("previewDepositions");
  let nextBtn = document.getElementById("nextDepositions");

  // verifica se n está dentro do intervalo dos slides
  if (n < 1) {
    n = 1;
  } else if (n > slides.length) {
    n = slides.length;
  }

  // esconde todos os slides e remove a classe "active" dos dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  // exibe o slide selecionado e adiciona a classe "active" ao dot correspondente
  
  dots[n - 1].classList.add("active");

  // desativa o botão preview se estiver no primeiro slide
  if (n == 1) {
    previewBtn.disabled = true;
  } else {
    previewBtn.disabled = false;
  }

  // desativa o botão next se estiver no último slide
  if (n == slides.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}























