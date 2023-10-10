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

const headerItems = document.querySelectorAll(".header__link");
const footerItems = document.querySelectorAll(".footer__link");

const scrollData = [1025, 2000, 3800];

headerItems.forEach((e, idx) => {
  e.addEventListener("click", function () {
    window.scroll({
      left: 0,
      top: scrollData[idx],
      behavior: "smooth",
    });
  });
});

footerItems.forEach((e, idx) => {
  e.addEventListener("click", function () {
    window.scroll({
      left: 0,
      top: scrollData[idx],
      behavior: "smooth",
    });
  });
});
