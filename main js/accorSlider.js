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



//akordioni
const accordionContent = document.querySelectorAll(".accordion-content"); 
  
accordionContent.forEach((item,index)=>{ 
    let header = item.querySelector("header"); 
    header.addEventListener("click", ()=>{ 
        item.classList.toggle("is-open"); 
  
        let description = item.querySelector(".accordion-content-description"); 
        if(item.classList.contains("is-open")){ 
            // Scrollheight property return the height of 
            // an element including padding 
            description.style.height=`${description.scrollHeight}px`;  
            item.querySelector("i").classList.replace("fa-plus","fa-minus"); 
        }else{ 
            description.style.height = "0px"; 
            item.querySelector("i").classList.replace("fa-minus","fa-plus"); 
        } 
        // function to pass the index number of clicked header 
        removeOpenedContent(index);  
    }) 
}) 
function removeOpenedContent(index){ 
  accordionContent.forEach((item2,index2)=>{ 
      if(index != index2){ 
          item2.classList.remove("is-open"); 
          let descrip = item2.querySelector(".accordion-content-description"); 
          descrip.style.height="0px"; 
          item2.querySelector("i").classList.replace("fa-minus","fa-plus"); 
      } 
  })
} 




//todolisti
const list = document.getElementById("todo");
const btn = document.getElementById("btn-add");
const deleteall = document.getElementById('clear all');

// events
btn.addEventListener("click", handleClick);
document.addEventListener("DOMContentLoaded", loadToDos);

// 1.
  function handleClick() {
  console.log(this); //button
  const getInputValue = this.previousElementSibling.value.trim();
  console.log(getInputValue);

  if (getInputValue) {
    createToDo(getInputValue);
    saveToStorage(getInputValue);
    this.previousElementSibling.value = " ";
  } else {
    alert("input field is empty");
  }
}

// 2.
   function createToDo(text) {
    const li = document.createElement("li");
    li.innerText = text;
  
    list.appendChild(li);
  }
  
  // 3.
   function saveToStorage(todo) {
    const todos = JSON.parse(localStorage.getItem("tasks")) || [];
  
    localStorage.setItem("tasks", JSON.stringify([...todos, todo]));
  }
  
  // 4.
    function loadToDos() {
    const todos = JSON.parse(localStorage.getItem("tasks"));
  
    if (todos) {
      todos.forEach((el) => createToDo(el));
    }
  }
  

  deleteall.addEventListener('click',function dlt() {
    list.innerHTML = "";
    
})
  
   function dlt() {
    
  }