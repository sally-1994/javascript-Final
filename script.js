
'use strict'


import { dlt,loadToDos,saveToStorage,createToDo,handleClick ,ne} from "./input.js";
dlt() 
loadToDos()
saveToStorage(todo)
createToDo(text) 
handleClick() 
ne(e)

//burgeri//
$(document).ready(function() {
  $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      e.stopPropagation();
  });

  $('html').click(function(){
      $('.nav-dropdown').hide();
  })
  $('#nav-toggle').click(function(){
      $('nav ul').slideToggle();
  })
  $('#nav-toggle').on('click', function(){
      this.classList.toggle('active');
  });
});



//slideris gaketeba//
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

// slider sruktura
//div
function createDivTag() {
  const div = document.createElement("div");

  return div;
}

// suratis gaketeba
function createImgTag(item) {
  const tagImage = document.createElement("img");
  tagImage.setAttribute("src", item.imageUrlSlide);
  tagImage.setAttribute("alt", item.slideTitle);

  return tagImage;
}

// title
function createTitle(item) {
  const titleTag = document.createElement("h2");
  titleTag.innerText = item.slideTitle;

  return titleTag;
}

// dots 
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

// slideris funqcia
function slide() {
  sliderContent.innerHTML = "";
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

// gadasvlebis funqcia
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
 }, 3000);






 
//forma
const validate = function(e) {
  var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
  var regEx;
  var removeSpan;
  var par;
  var check = false;
  var val;
  var errArr = [];

  for (var i = 0; i < fields.length; i++) {
      if (fields[i].value === "") {
        
          if (fields[i].nextElementSibling.classList.contains('error')) {
            removeSpan = fields[i].nextElementSibling;
            par = fields[i].parentNode;
            par.removeChild(removeSpan);
            fields[i].nextElementSibling.innerHTML = "Hmmm! " + fields[i].placeholder + " is required?";
            fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
            check = false;
            errArr.push(fields[i]);
          }
          fields[i].nextElementSibling.innerHTML = "Hmmm! " + fields[i].placeholder + " is required?";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
      } else {

          // check if message and name values contain valid characters.
          if (fields[i].id !== 'email' && fields[i].id !== 'phone') {
              val = isValidChar(fields[i]);
              if(val === false) {
                fields[i].nextElementSibling.innerHTML = "Are you trying to HACK ME!";
                fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
                check = false;
                errArr.push(fields[i]);
              } else {
                fields[i].nextElementSibling.innerHTML = "";
                fields[i].style.boxShadow = "none";
                check = true;
              }
          }
        
          if(fields[i].id === 'phone') {
            val = isValidPhone(fields[i]);
            if(val === false) {
              fields[i].nextElementSibling.innerHTML = "Hmmm! Your phone number is not valid?";
              fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
              check = false;
              errArr.push(fields[i]);
            } else {
              fields[i].nextElementSibling.innerHTML = "";
              fields[i].style.boxShadow = "none";
              check = true;  
            }
          }

          if (fields[i].id === 'email') {
              val = isValidEmail(fields[i]);
              if(val === false) {
                  fields[i].nextElementSibling.innerHTML = "Hmmm! Your email address is not valid?";
                  fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
                  check = false;
                  errArr.push(fields[i]);
              } else {
                  fields[i].nextElementSibling.innerHTML = "";
                  fields[i].style.boxShadow = "none";
                  check = true;
              }
          }
      }
  }

  if(check === false) {
    var count = 0;
    var toErr = setInterval(function() {
      var e = errArr[0].offsetTop + -25;
      var pos = Math.abs(e);
      if(count < pos) {
        count ++;
        window.scrollTo(0, count);
      } else {
        clearInterval(toErr);
      }
    }, 1);
  }
  
  return check

  // Helper functions.
  function isValidEmail(e) {
      regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var email = e.value;
      if (!regEx.test(email)) {
          return false;
      }
  }

  function isValidChar(e) {
      regEx = /^[a-zA-Z@#$%!?^&*()_+\-=\[\]{};':"\\|,.\/? ]*$/;
      var value = e.value;
      if (!regEx.test(value)) {
          return false;
      }
  }

  function isValidPhone(e) {
    regEx = /^[+]?[(]?[+]?\d{2,4}[)]?[-\s]?\d{2,8}[-\s]?\d{2,8}$/;
    var value = e.value;
    if(!regEx.test(value)) {
      return false;
    }
  }
};


//navb
$(document).ready(function() {
$('nav ul li a:not(:only-child)').click(function(e) {
    $(this).siblings('.nav-dropdown').toggle();
    e.stopPropagation();
});

$('html').click(function(){
    $('.nav-dropdown').hide();
})
$('#nav-toggle').click(function(){
    $('nav ul').slideToggle();
})
$('#nav-toggle').on('click', function(){
    this.classList.toggle('active');
});
});














