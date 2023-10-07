const toggleThemeButton = document.querySelector(".mode__icon");

const phoneTitle = document.querySelector(".phone");

const headerList = document.querySelector(".header__list");
const headerButton = document.querySelector(".header__button");
const footerButton = document.querySelector(".footer__button");
const textL = document.querySelectorAll(".text-l");
const sliderSectionTheme = document.querySelector(
  ".section__slider-presentation"
);
const textBlack = document.querySelectorAll(".text__black");
const imgCurrencyText = document.querySelectorAll(".img__currency-text");
const ExchangeCoinBgc = document.querySelectorAll(".exchange__coin-background");
const stepNumber = document.querySelectorAll(".step__number");
const sectionStartSteps = document.querySelector(".section__start-steps");
const communityBg = document.querySelector(".community__bg-white");


function toggleTheme() {
    phoneTitle.classList.toggle("dark")
    toggleThemeButton.classList.toggle("dark")
  document.body.classList.toggle("bg-dark-body");
  headerList.classList.toggle("text__white");
  headerButton.classList.toggle("dark");
  footerButton.classList.toggle("dark");
  textL.forEach((e) => {
    e.classList.toggle("bg-dark");
  });
  sliderSectionTheme.classList.toggle("bg-dark-block");
  productPresentation.classList.toggle("bg-dark-block");
  commissionBlock.classList.toggle("bg-dark-block");
  statBlock.classList.toggle("bg-dark-block");
  anonymusBlock.classList.toggle("bg-dark-block");
  verificationBlock.classList.toggle("bg-dark-block");
  exchangeBlock.classList.toggle("bg-dark-block");
  textBlack.forEach((e) => {
    e.classList.toggle("text__white-80");
  });
  imgCurrencyText.forEach((e) => {
    e.classList.toggle("text__white-40");
  });
  ExchangeCoinBgc.forEach((e) => {
    e.classList.toggle("dark");
  });
  stepNumber.forEach((e) => {
    e.classList.toggle("dark");
  });
  sectionStartSteps.classList.toggle("bg-dark-block");
  animatedButton.classList.toggle("dark")
  communityBg.classList.toggle("dark")
}

toggleThemeButton.addEventListener("click", toggleTheme);
