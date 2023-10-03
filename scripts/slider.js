const sliderSection = document.querySelector(".section__slider-presentation");
const currentImage = document.querySelector(".current__image");
const sliderBackground = document.querySelector(".slider__bakground1");

const textContainer1 = document.querySelector(".slider__text_container1");
const textContainer2 = document.querySelector(".slider__text_container2");
const textContainer3 = document.querySelector(".slider__text_container3");

const textContainers = [textContainer1, textContainer2, textContainer3];

let offset = 488;
let step = 1;
let canClick = true;

function ChangeSliderBar(step) {
  document.querySelectorAll(".slider__bar").forEach((e, idx) => {
    if (idx + 1 === step) {
      e.classList.add("slider__bar-active");
    } else {
      e.classList.remove("slider__bar-active");
    }
  });
}

function changeContentDown(step) {
  textContainers[step - 1].style.opacity = 1;
  textContainers[step - 2].style.opacity = 0;
}

function changeContentUp(step) {
  textContainers[step - 1].style.opacity = 1;
  textContainers[step].style.opacity = 0;
}

function backgroundChange(step) {
  sliderBackground.classList.remove(sliderBackground.classList.item(0));
  sliderBackground.classList.add(`slider__bakground${step}`);
}

sliderSection.addEventListener("wheel", function (event) {
  // Проверяем направление скроллинга (event.deltaY положительное значение при скроллинге вниз, и отрицательное при скроллинге вверх)
  if (event.deltaY > 0) {
    // skroll down
    if (step < 3) {
      event.preventDefault();
    }
    if (!canClick || step == 3) {
      return;
    }

    currentImage.style.bottom = offset * step + "px";
    step++;

    changeContentDown(step);
    backgroundChange(step);
    ChangeSliderBar(step);

    canClick = false;

    setTimeout(() => {
      canClick = true;
    }, 1000);
  } 
  
  else if (event.deltaY < 0) {
    //scroll up
    if (step > 1) {
      event.preventDefault();
    }
    if (!canClick || step == 1) {
      return;
    }
    
    currentImage.style.bottom = offset * (step - 2) + "px";
    step--;
    
    changeContentUp(step);
    backgroundChange(step);
    ChangeSliderBar(step);
    
    canClick = false;
    
    setTimeout(() => {
      canClick = true;
    }, 1000);
  }
});

// Some comments