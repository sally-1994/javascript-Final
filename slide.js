'use strict'

// slider
const dataSLider = [
    {
        id: 1,
        imageUrlSlide:
          "img/sliderimg1.png",
        slideTitle: "slider title 1",
      },
      {
        id: 2,
        imageUrlSlide:
          "img/sliderimg2.png",
        slideTitle: "slider title 2",
      },
      {
        id: 3,
        imageUrlSlide:
          "img/sliderimg3.png",
        slideTitle: "slider title 3",
      },
   
  ];
  
  const sliderContent = document.getElementById("slider-content");
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  let sliderIndex = 0;
  
  // სლაიდერის სტრუქტურის აწყობა
  //div-ის შექმნა
  function createDivTag() {
    const div = document.createElement("div");
  
    return div;
  }
  
  // სურათის შექმნა
  function createImgTag(item) {
    const tagImage = document.createElement("img");
    tagImage.setAttribute("src", item.imageUrlSlide);
    tagImage.setAttribute("alt", item.slideTitle);

    return tagImage;
  }
  
  // სათაურის შემქნა
  function createTitle(item) {
    const titleTag = document.createElement("h2");
    titleTag.innerText = item.slideTitle;
  
    return titleTag;
  }
  
  // dots შექმნა
  function createDots() {
    const dotsParent = document.createElement("div");
    dotsParent.classList.add("dots-Wraper");
  
    dataSLider.forEach((el) => {
      const dotChild = document.createElement("div");
      dotChild.classList.add("dot-item");
      dotChild.setAttribute("data-id", el.id - 1);
  
      dotChild.addEventListener("click", function () {
        console.log(this);
        const dotId = this.getAttribute("data-id");
        sliderIndex = dotId;
        slide();
      });
  
      dotsParent.appendChild(dotChild);
    });
  
    return dotsParent;
  }
  
  // მთავარი სლაიდერს ფუნქცია,რომელი სლაიდი უნდა გამოჩნდეს
   function slide() {
    sliderContent.innerHTML = " ";
    const slideItemDiv = createDivTag();
    const slideItemImg = createImgTag(dataSLider[sliderIndex]);
    const slideItemTitle = createTitle(dataSLider[sliderIndex]);
    const dots = createDots();
  
    slideItemDiv.appendChild(slideItemImg);
    slideItemDiv.appendChild(slideItemTitle);
  
    sliderContent.appendChild(slideItemDiv);
    sliderContent.appendChild(dots);
  }
  
  slide();
  
  // ისრების ფუნქციონალი
  function arrowLeftClick() {
    if (sliderIndex == 0) {
      sliderIndex = dataSLider.length - 1;
      slide();
      return;
    }
    sliderIndex--;
    slide();
  }
  
  function arrowRigthClick() {
    if (sliderIndex == dataSLider.length - 1) {
      sliderIndex = 0;
      slide();
      return;
    }
    
    sliderIndex++;
    slide();
  }
  
  arrowLeft.addEventListener("click", arrowLeftClick);
  arrowRight.addEventListener("click", arrowRigthClick);
  
  setInterval(() => {
    arrowRigthClick();
  }, 7000);