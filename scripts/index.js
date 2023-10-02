const currencyImages = [
  "./assets/icons/BNB.svg",
  "./assets/icons/BTC.svg",
  "./assets/icons/ETH.svg",
  "./assets/icons/LTC.svg",
  "./assets/icons/TON.svg",
  "./assets/icons/TRX.svg",
  "./assets/icons/USDC.svg",
  "./assets/icons/USDT.svg",
];

const currencyNames = [
  "BNB",
  "BTC",
  "ETH",
  "LTC",
  "TON",
  "TRX",
  "USDC",
  "USDT",
];

const imgContainer = document.querySelector(".img__currency-container");

for (let index = 0; index < currencyImages.length; index++) {
  const imgSrc = currencyImages[index];
  const currencyName = currencyNames[index];

  const imgElement = document.createElement("img");
  imgElement.classList.add("currency__img");
  imgElement.src = imgSrc;
  imgElement.alt = `${currencyName} icon`;

  const textElement = document.createElement("p");
  textElement.classList.add("img__currency-text", "text-xs");
  textElement.textContent = currencyName;

  const currencyWrapper = document.createElement("div");
  currencyWrapper.classList.add("img__currency");
  currencyWrapper.appendChild(imgElement);
  currencyWrapper.appendChild(textElement);

  imgContainer.append(currencyWrapper);
}

function zoomImages() {
  const imgCurrencyElements = document.querySelectorAll(".currency__img");
  const imgCurrencyText = document.querySelectorAll(".img__currency-text");
  let currentIndex = 0;

  const zoomInterval = setInterval(() => {
    imgCurrencyElements[currentIndex].classList.add("zoomed");
    imgCurrencyText[currentIndex].classList.add("zoomed");

    setTimeout(() => {
      imgCurrencyElements[currentIndex].classList.remove("zoomed");
      imgCurrencyText[currentIndex].classList.remove("zoomed");
      currentIndex++;

      if (currentIndex === currencyImages.length) {
        clearInterval(zoomInterval);
      }
    }, 300);
  }, 600);
}

const productPresentation = document.querySelector(
  ".product__presentation-currencies"
);
productPresentation.addEventListener("mouseenter", zoomImages);


const animatedButton = document.querySelector(".animated__button")

function moveArrow() {
  const arrow = document.querySelector(".animated__arrow");
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
  } else {
    arrow.style.top = targetTop + "px";
    arrow.style.left = targetLeft + "px";

    setTimeout(() => {
        animatedButton.classList.add('zoomed');
    }, 500);

    setTimeout(() => {
        animatedButton.classList.remove('zoomed');
    }, 900);

    setTimeout(() => {
      arrow.style.top = originalTop + "px";
      arrow.style.left = originalLeft + "px";
    }, 1200);
  }
}

const commissionBlock = document.querySelector(".commission__block");

commissionBlock.addEventListener("mouseenter", moveArrow);
