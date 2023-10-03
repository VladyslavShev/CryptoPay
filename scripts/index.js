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


// ZOOM IMAGES
function zoomImages() {
    if (isAnimatingZoom) {
      return;
    }
  
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
  
  productPresentation.addEventListener("mouseenter", zoomImages);
  




// MOOVE ARROW

const animatedButton = document.querySelector(".animated__button");
const arrow = document.querySelector(".animated__arrow");
let isAnimatingArrow = false; 

function moveArrow() {
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
      animatedButton.classList.add("zoomed");
    }, 500);

    setTimeout(() => {
      animatedButton.classList.remove("zoomed");
    }, 900);

    setTimeout(() => {
      arrow.style.top = originalTop + "px";
      arrow.style.left = originalLeft + "px";

      isAnimatingArrow = false; 
    }, 1200);
  }
}

const commissionBlock = document.querySelector(".commission__block");

commissionBlock.addEventListener("mouseenter", moveArrow);



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
  const translateXValue = -72; 

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
    coinBackgrounds[1].style.transform = `translateX(${-translateXValue / 2}px)`;
    coinBackgrounds[1].style.zIndex = "2";
    coinLogos[1].classList.add("active");

    setTimeout(() => {
      coinBackgrounds[0].style.transform = `translateX(${-translateXValue / 2}px)`;
      coinBackgrounds[0].style.zIndex = "1";

      setTimeout(() => {
        coinBackgrounds[0].style.transform = `translateX(${-translateXValue}px)`;
        coinBackgrounds[0].style.zIndex = "4";
        coinLogos[0].classList.add("active");
        coinBackgrounds[1].style.transform = `translateX(${translateXValue/2}px)`;
        coinBackgrounds[1].style.zIndex = "2";
        coinLogos[1].classList.remove("active");
        coinBackgrounds[2].style.transform = `translateX(${translateXValue/2}px)`;
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
exchangeBlock.addEventListener("mouseenter", mooveExchange);




const dataAllTime = {
    name: "all time",
    data: ["all time", "$204,920", "16,256", "9,353", "5,606", "57%"]
};

const dataToday = {
    name: "today",
    data: ["today", "$6,530", "2,569", "1,253", "1,606", "48%"]
};

const dataYesterday = {
    name: "yesterday",
    data: ["yesterday", "$8,216", "4,980", "3,012", "3.606", "60%"]
};

const statBlock = document.querySelector(".block__stat");
const statData = document.querySelectorAll(".stat__data");
const dataContent = document.querySelector(".stat__content")
const statButton = document.querySelectorAll(".stat__button")

let animationInProgress = false; 
function statAnimation() {
    if (animationInProgress) {
        return; 
    }

    animationInProgress = true; 

    for (let dataIndex = 0; dataIndex < statData.length; dataIndex++) {
        statData[dataIndex].classList.add("active");
        dataContent.classList.add("active");
        statButton[0].classList.remove("active")
        setTimeout(() => {
          statButton[1].classList.add("active")
            statData[dataIndex].innerHTML = dataToday.data[dataIndex];
            statData[dataIndex].classList.remove("active");
            dataContent.classList.remove("active");
        }, 200);
        setTimeout(() => {
          statData[dataIndex].classList.add("active");
          dataContent.classList.add("active");
          statButton[1].classList.remove("active")
            setTimeout(() => {
              statButton[2].classList.add("active")
                statData[dataIndex].innerHTML = dataYesterday.data[dataIndex];
                statData[dataIndex].classList.remove("active");
                dataContent.classList.remove("active");
            }, 200);
        }, 1000);

        setTimeout(() => {
          statButton[2].classList.remove("active")
          statButton[0].classList.add("active")
            statData[dataIndex].classList.add("active");
            dataContent.classList.add("active");
            setTimeout(() => {
                statData[dataIndex].innerHTML = dataAllTime.data[dataIndex];
                statData[dataIndex].classList.remove("active");
                dataContent.classList.remove("active");
    
                if (dataIndex === statData.length - 1) {
                    animationInProgress = false; // 
                }

            }, 200);
        }, 2000);
    }
}

statBlock.addEventListener("mouseenter", statAnimation);

