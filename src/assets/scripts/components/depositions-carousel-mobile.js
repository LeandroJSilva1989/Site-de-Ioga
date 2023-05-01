const btnRightMobile = document.querySelector(".btn-arrow-right-mobile");
const btnLeftMobile = document.querySelector(".btn-arrow-left-mobile");
const elementsMobile = document.querySelector(".elements-mobile");
const prevButtonMobile = document.getElementById('previewDepositionsMobile');
const nextButtonMobile = document.getElementById('nextDepositionsMobile');
let pixelsMobile = 0;




btnRightMobile.addEventListener("click", function () {
  pixelsMobile = pixelsMobile - 100;
  elementsMobile.style = `transform: translateX(${pixelsMobile}%)`;
});

btnLeftMobile.addEventListener("click", function () {
  pixelsMobile = pixelsMobile + 100;
  elementsMobile.style = `transform: translateX(${pixelsMobile}%)`;
});


const buttonsWrapperMobile = document.querySelector(".depositions-options_mobile");
const slidesMobile = document.querySelector(".depositions-carousel_mobile");



buttonsWrapperMobile.addEventListener("click", e => {


  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapperMobile.children).forEach(item =>
      item.classList.remove("active")
    );

    if (e.target.classList.contains("first-mobile")) {
      slidesMobile.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second-mobile")) {
      slidesMobile.style.transform = "translateX(-100%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third-mobile')) {
      slidesMobile.style.transform = 'translatex(-200%)';
      e.target.classList.add('active');

    }

  }
});


let slideIndexMobile = 1;
showSlidesMobile(slideIndexMobile);

function plusSlidesMobile(n) {
  showSlidesMobile(slideIndexMobile += n);
}

function currentSlideMobile(n) {
  showSlidesMobile(slideIndexMobile = n);
}

function showSlidesMobile(n) {
  let i;
  let slides = document.getElementsByClassName("depositions-carousel-slide_mobile");
  let dots = document.getElementsByClassName("dot-mobile");


  /*
    if (n > slides.length) { slideIndexMobile = 1 }
    if (n < 1) { slideIndexMobile = slides.length }
  */

  // verifica se n está dentro do intervalo dos slides
  if (n < 1) {
    n = slides.length;
  } else if (n > slides.length) {
    n = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  //slides[slideIndexMobile - 1].style.display = "flex";
  dots[slideIndexMobile - 1].className += " active";

  if (n == 1) {
    prevButtonMobile.disabled = true;
  } else {
    prevButtonMobile.disabled = false;
  }

  // desativa o botão next se estiver no último slide
  if (n == 3) {
    nextButtonMobile.disabled = true;
  } else {
    nextButtonMobile.disabled = false;
  }
}

// recupera os elementos HTML relevantes
const carouselMobile = document.querySelector('.wrapper-depositions_mobile .depositions-carousel_mobile');



// define o índice inicial do carrossel
let currentSlideIndexMobile = 0;
updateButtonStatesMobile();

// adiciona um manipulador de eventos "click" para cada botão
prevButtonMobile.addEventListener('click', handlePrevButtonClickMobile);
nextButtonMobile.addEventListener('click', handleNextButtonClickMobile);

// define a função para desativar o botão "preview" quando estiver no início e o botão "next" quando estiver no final
function handlePrevButtonClickMobile() {
  currentSlideIndexMobile--;
  updateButtonStatesMobile();
}

function handleNextButtonClickMobile() {
  currentSlideIndexMobile++;
  updateButtonStatesMobile();
}

function updateButtonStatesMobile() {
  if (currentSlideIndexMobile <= 0) {
    // o carrossel está no início, desativa o botão "preview"
    prevButtonMobile.disabled = true;
  } else {
    // o carrossel não está no início, ativa o botão "preview"
    prevButtonMobile.disabled = false;

  }

  if (currentSlideIndexMobile >= carouselMobile.children.length - 1) {
    // o carrossel está no final, desativa o botão "next"
    nextButtonMobile.disabled = true;
  } else {
    // o carrossel não está no final, ativa o botão "next"
    nextButtonMobile.disabled = false;
  }
}






function prevSlide() {
  if (currentSlideIndexMobile > 0) {
    currentSlideIndexMobile--;
    carouselMobile.scrollLeft = slides[currentSlideIndexMobile].offsetLeft;
  }
}

function nextSlide() {
  if (currentSlideIndexMobile < slides.length - 1) {
    currentSlideIndexMobile++;
    carouselMobile.scrollLeft = slides[currentSlideIndexMobile].offsetLeft;
  }
}

prevButtonMobile.disabled = true;

carouselMobile.addEventListener('scroll', () => {
  if (currentSlideIndexMobile === 0) {
    prevButtonMobile.disabled = true;
  } else {
    prevButtonMobile.disabled = false;
  }

  if (currentSlideIndexMobile === slides.length - 1) {
    nextButtonMobile.disabled = true;
  } else {
    nextButtonMobile.disabled = false;
  }
});




