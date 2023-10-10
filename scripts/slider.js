const sliderSection = document.querySelector(".section__slider-presentation");
const currentImage = document.querySelector(".current__image");
const sliderBackground = document.querySelector(".slider__bakground1");

const textContainer1 = document.querySelector(".slider__text_container1");
const textContainer2 = document.querySelector(".slider__text_container2");
const textContainer3 = document.querySelector(".slider__text_container3");

const textContainers = [textContainer1, textContainer2, textContainer3];

let vieportWidth = window.innerWidth
console.log(vieportWidth);
const offset = 488;
const mobileOffset = 335;
let step = 1;
let canClick = true;

let isPc


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
document.querySelectorAll(".slider_back").forEach((e, idx) => {
  if (idx + 1 === step) {
    e.classList.add("back_active")
  } else {
    setTimeout(() => {
      
      e.classList.remove("back_active")
    }, 300);
  }
})
}

function addPCListener(argument) {
  // PC-logic
argument.addEventListener("wheel", function (event) {
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
}

function addMobileListener(argument) {
  // mobile-logic
argument.addEventListener("touchstart", function (event) {
  // Сохраняем начальное положение пальца
  this.startX = event.touches[0].clientX;
});

sliderSection.addEventListener("touchmove", function (event) {
  // Вычисляем расстояние, на которое палец переместился
  const deltaX = event.touches[0].clientX - this.startX;

  // Если расстояние больше порогового значения, то считаем, что это свайп
  if (Math.abs(deltaX) > 50) {
    // Если свайп влево, то ...
    if (deltaX < 0) {
      if (step < 3) {
        event.preventDefault();
      }
      if (!canClick || step == 3) {
        return;
      }

      currentImage.style.right = mobileOffset * step + "px";
    step++;

    changeContentDown(step);
    backgroundChange(step);
    ChangeSliderBar(step);

    canClick = false;

    setTimeout(() => {
      canClick = true;
    }, 1000);

    }

    // Если свайп вправо, то ...
    if (deltaX > 0) {
     if (step > 1) {
      event.preventDefault();
    }
    if (!canClick || step == 1) {
      return;
    }
    
    currentImage.style.right = mobileOffset * (step - 2) + "px";
    step--;
    
    changeContentUp(step);
    backgroundChange(step);
    ChangeSliderBar(step);
    
    canClick = false;
    
    setTimeout(() => {
      canClick = true;
    }, 1000);
    }
  }
});

// Отлавливаем событие touchend
sliderSection.addEventListener("touchend", function () {
  // Обнуляем начальное положение пальца
  this.startX = 0;
});
}


if (vieportWidth >= 1200) {
  isPc = true
  addPCListener(sliderSection)
} 


else {
  isPc = false
  addMobileListener(sliderSection)
}


