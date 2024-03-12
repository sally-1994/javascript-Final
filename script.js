'use strict'
//burgeri//
const nav = document.getElementById('navBar');
const burger = document.getElementById('burgerBar');


burger.addEventListener('click', function(){
  nav.classList.toggle('activeNav');
  burger.classList.toggle()
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
const formElement = document.getElementById("registration");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = {};

  //username
  let usernameValue = document.getElementById("usernamefield").value;

  if (usernameValue == "") {
    errors.username = "Username can not be empty";
  }

  // password
  let passwValue = document.getElementById("passwordfield").value;
  let passw2Value = document.getElementById("passwordfield2").value;

  if (passwValue == "") {
    errors.passw = "Password field can not empty";
  }

  if (passwValue != passw2Value) {
    errors.passw2 = "Passwords do not match";
  }

  // radio
  let gender = false;

  formElement.querySelectorAll('[name = "gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select Your Gender";
  }

  //checkbox
  let checkInput = document.getElementById("agree").checked;

  if (!checkInput) {
    errors.check = "You must agree our terms and conditions";
  }

  formElement.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  // 
  for (let item in errors) {
    console.log(item); 

    let errorPelement = document.getElementById("error-" + item);
    console.log(errorPelement);
    

    if (errorPelement) {
      errorPelement.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }

  console.log(errors);
});


// show hide password
let passwShow = document.getElementById("passwordfield");
let icon = document.getElementById("showIcon");

 let showHidePassword = () => {
  if (passwShow.type == "password") {
    passwShow.setAttribute("type", "text");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    passwShow.setAttribute("type", "password");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
};

 icon.addEventListener("click", showHidePassword);

// email validation - regex
let email = document.getElementById("emailfield");

function validationEmail() {
  let emailValue = document.getElementById("emailfield").value;
  let textError = document.getElementById("emailError");
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailPattern.match(emailValue)) {
    textError.innerText = "Your Email is valid";
    textError.style.color = "green";
  } else {
    textError.innerText = "Your Email is Invalid";
   textError.style.color = "red";
  }

  if (emailValue == "") {
    textError.innerHTML = "";
  }
}



//burgeri
const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('close');
  overlay.classList.toggle("overlay")
})


