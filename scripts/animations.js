// ZOOM IMAGES
function zoomImages() {
  const isDarkTheme = localStorage.getItem("theme");

  if (isAnimatingZoom) {
    return;
  }

  const imgCurrencyElements = document.querySelectorAll(".currency__img");
  const imgCurrencyText = document.querySelectorAll(".img__currency-text");
  let currentIndex = 0;
  const zoomInterval = setInterval(() => {
    imgCurrencyElements[currentIndex].classList.add("zoomed");
    imgCurrencyText[currentIndex].classList.add(
      isDarkTheme === "dark" ? "zoomed-dark" : "zoomed"
    );

    setTimeout(() => {
      imgCurrencyElements[currentIndex].classList.remove("zoomed");
      imgCurrencyText[currentIndex].classList.remove(
        isDarkTheme === "dark" ? "zoomed-dark" : "zoomed"
      );
      currentIndex++;

      if (currentIndex === currencyImages.length) {
        clearInterval(zoomInterval);
        isAnimatingZoom = false;
      }
    }, 300);
  }, 600);

  isAnimatingZoom = true;
}

const productPresentation = document.querySelector(
  ".product__presentation-currencies"
);

let isAnimatingZoom = false;

// MOOVE ARROW

const animatedButton = document.querySelector(".animated__button");
const arrow = document.querySelector(".animated__arrow");
let isAnimatingArrow = false;

function moveArrow() {
  const isDarkTheme = localStorage.getItem("theme");

  if (isAnimatingArrow) {
    return;
  }

  isAnimatingArrow = true;

  const originalTop = 90;
  const originalLeft = 300;
  const targetTop = 73;
  const targetLeft = 265;

  if (
    arrow.style.top === targetTop + "px" &&
    arrow.style.left === targetLeft + "px"
  ) {
    arrow.style.top = originalTop + "px";
    arrow.style.left = originalLeft + "px";

    isAnimatingArrow = false;
  } else {
    arrow.style.top = targetTop + "px";
    arrow.style.left = targetLeft + "px";

    setTimeout(() => {
      animatedButton.classList.add(
        isDarkTheme === "dark" ? "zoomed-dark" : "zoomed"
      );
    }, 500);

    setTimeout(() => {
      animatedButton.classList.remove(
        isDarkTheme === "dark" ? "zoomed-dark" : "zoomed"
      );
    }, 900);

    setTimeout(() => {
      arrow.style.top = originalTop + "px";
      arrow.style.left = originalLeft + "px";

      isAnimatingArrow = false;
    }, 1200);
  }
}

const commissionBlock = document.querySelector(".commission__block");

// EXCHANGE COINS
const coinBackgrounds = document.querySelectorAll(".exchange__coin-background");
const coinLogos = document.querySelectorAll(".coin__logo");
let isAnimatingExchange = false;

function mooveExchange() {
  if (isAnimatingExchange) {
    return;
  }

  isAnimatingExchange = true;

  const duration = 1200;
  const translateXValue = -80;

  const initialStyles = [];
  for (let i = 0; i < 3; i++) {
    initialStyles.push({
      transform: coinBackgrounds[i].style.transform,
      zIndex: coinBackgrounds[i].style.zIndex,
      logoActive: coinLogos[i].classList.contains("active"),
    });
  }

  coinBackgrounds[2].style.transform = `translateX(${translateXValue}px)`;
  coinLogos[2].classList.remove("active");

  setTimeout(() => {
    coinBackgrounds[1].style.transform = `translateX(${
      -translateXValue / 2
    }px)`;
    coinBackgrounds[1].style.zIndex = "2";
    coinLogos[1].classList.add("active");

    setTimeout(() => {
      coinBackgrounds[0].style.transform = `translateX(${
        -translateXValue / 2
      }px)`;
      coinBackgrounds[0].style.zIndex = "1";

      setTimeout(() => {
        coinBackgrounds[0].style.transform = `translateX(${-translateXValue}px)`;
        coinBackgrounds[0].style.zIndex = "4";
        coinLogos[0].classList.add("active");
        coinBackgrounds[1].style.transform = `translateX(${
          translateXValue / 2
        }px)`;
        coinBackgrounds[1].style.zIndex = "2";
        coinLogos[1].classList.remove("active");
        coinBackgrounds[2].style.transform = `translateX(${
          translateXValue / 2
        }px)`;
        coinBackgrounds[2].style.zIndex = "3";

        setTimeout(() => {
          coinBackgrounds[0].style.transform = initialStyles[1].transform;
          coinBackgrounds[0].style.zIndex = initialStyles[1].zIndex;
          coinBackgrounds[1].style.transform = initialStyles[2].transform;
          coinBackgrounds[1].style.zIndex = initialStyles[2].zIndex;
          coinBackgrounds[2].style.transform = initialStyles[0].transform;
          coinBackgrounds[2].style.zIndex = initialStyles[0].zIndex;

          for (let i = 0; i < 3; i++) {
            if (initialStyles[i].logoActive) {
              coinLogos[i].classList.add("active");
            } else {
              coinLogos[i].classList.remove("active");
            }
          }

          isAnimatingExchange = false;
        }, 700);
      }, 700);
    }, 0);
  }, 0);
}

const exchangeBlock = document.querySelector(".exchange__block");

const statBlock = document.querySelector(".block__stat");
const dataContent = document.querySelectorAll(".stat__content");
const statButton = document.querySelectorAll(".stat__button");

let animationInProgress = false;

function statAnimation() {
  if (animationInProgress) {
    return;
  }

  animationInProgress = true;

  dataContent[0].classList.add("closed");
  dataContent[1].classList.remove("closed");
  statButton[0].classList.remove("active");
  statButton[1].classList.add("active");
  setTimeout(() => {
    dataContent[1].classList.add("closed");
    dataContent[2].classList.remove("closed");
    statButton[1].classList.remove("active");
    statButton[2].classList.add("active");
  }, 900);
  setTimeout(() => {
    dataContent[2].classList.add("closed");
    dataContent[0].classList.remove("closed");
    statButton[2].classList.remove("active");
    statButton[0].classList.add("active");
    animationInProgress = false;
  }, 1800);
}

// Anpnymus animation
const anonymusBlock = document.querySelector(".anonymus__block-wrapper");
const anonymusContent = document.querySelectorAll(".anonymus__content");
let isAnimatingAnonymus = false;

function anonymusAnimation() {
  if (isAnimatingAnonymus) {
    return;
  }

  isAnimatingAnonymus = true;

  anonymusContent[0].classList.add("hidden");
  anonymusContent[1].classList.remove("closed");

  setTimeout(() => {
    anonymusContent[0].classList.add("closed");
    anonymusContent[0].classList.remove("hidden");
    anonymusContent[1].classList.add("hidden");
    anonymusContent[2].classList.remove("closed");
  }, 1000);

  setTimeout(() => {
    anonymusContent[2].classList.add("hidden");
    anonymusContent[0].classList.remove("closed");
    anonymusContent[1].classList.add("closed");
    anonymusContent[1].classList.remove("hidden");
  }, 2000);

  setTimeout(() => {
    anonymusContent[2].classList.add("closed");
    anonymusContent[2].classList.remove("hidden");
    isAnimatingAnonymus = false;
  }, 2700);
}

// VERIFICATION ANIMATION

const verificationBlock = document.querySelector(".verification__block");
const verificationContent = document.querySelectorAll(".verification__content");
let isAnimatingVerification = false;

function verificationAnimation() {
  if (isAnimatingVerification) {
    return;
  }

  isAnimatingVerification = true;

  verificationContent[0].classList.add("hidden");
  verificationContent[1].classList.remove("closed");

  setTimeout(() => {
    verificationContent[0].classList.add("closed");
    verificationContent[0].classList.remove("hidden");
    verificationContent[1].classList.add("hidden");
    verificationContent[2].classList.remove("closed");
  }, 1000);

  setTimeout(() => {
    verificationContent[2].classList.add("hidden");
    verificationContent[0].classList.remove("closed");
    verificationContent[1].classList.add("closed");
    verificationContent[1].classList.remove("hidden");
  }, 2000);

  setTimeout(() => {
    verificationContent[2].classList.remove("hidden");
    verificationContent[2].classList.add("closed");
    isAnimatingVerification = false;
  }, 2700);
}

if (vieportWidth >= 1200) {
  productPresentation.addEventListener("mouseenter", zoomImages);
  commissionBlock.addEventListener("mouseenter", moveArrow);
  exchangeBlock.addEventListener("mouseenter", mooveExchange);
  anonymusBlock.addEventListener("mouseenter", anonymusAnimation);
  statBlock.addEventListener("mouseenter", statAnimation);
  verificationBlock.addEventListener("mouseenter", verificationAnimation);
}
