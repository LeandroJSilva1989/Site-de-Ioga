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


/*
function handleCarouselMove() {
  if (carouselMobile.scrollLeft === 0) {
    prevButtonMobile.disabled = true;
  } else {
    prevButtonMobile.disabled = false;
  }

  if (carouselMobile.scrollLeft + carouselMobile.offsetWidth >= carouselMobile.scrollWidth) {
    nextButtonMobile.disabled = true;
  } else {
    nextButtonMobile.disabled = false;
  }
}

prevButtonMobile.disabled = true;

carouselMobile.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carouselMobile.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touchMoveX = e.changedTouches[0].screenX;
  const touchDifferenceX = touchStartX - touchMoveX;
  carouselMobile.scrollLeft += touchDifferenceX;
  handleCarouselMove();
  touchStartX = touchMoveX;
});

*/


/*

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

carouselMobile.addEventListener('touchMove', () => {
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

*/





const sliderMobile = document.querySelector('.elements-mobile');
let isDragging = false,
  startPosition = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0;

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPosition = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    sliderMobile.classList.add('grabbing');
  }
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < 2) {
    currentIndex++;
  }
  if (movedBy > 100 && currentIndex > 0) {
    currentIndex--;
  }
  setPositionByIndex();
  sliderMobile.classList.remove('grabbing');
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPosition;
  }
}

function animation() {
  setSliderPosition();
  if (isDragging) {
    requestAnimationFrame(animation);
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

function setSliderPosition() {
  sliderMobile.style.transform = `translateX(${currentTranslate}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
  const slidesMobile = document.querySelectorAll('.deposition-slides_mobile');
  slidesMobile.forEach((slide, index) => {
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);
    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mousemove', touchMove);
  });

  const dotsMobile = document.querySelectorAll('.dot-mobile');
  dotsMobile.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      setPositionByIndex();
    });
  });
});

function plusSlidesMobile(n) {
  currentIndex += n;
  if (currentIndex < 0) {
    currentIndex = 2;
  }
  if (currentIndex > 2) {
    currentIndex = 0;
  }
  setPositionByIndex();
}

function currentSlideMobile(n) {
  currentIndex = n - 1;
  setPositionByIndex();
}



