
'use strict'
//burgeri//

window.onscroll = function() {myFunction()};
const header = document.getElementById('nav-bar');
var sticky = header.offsetTop

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


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

  // Helper functions.//
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


//navb//
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


//filtri js//

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const cards = document.querySelectorAll('.cards');

  function filterIcons(searchQuery) {
	  const nothingfound = document.getElementById("nothing-alert");
	  let number = 0;
		cards.forEach(function (card) {
      const name = card.querySelector("h2").textContent.toLowerCase();

      if (name.includes(searchQuery.toLowerCase())) {
		 nothingfound.style.display = "none";
        card.style.display = "flex";
		number++;
      } else {
        card.style.display = "none";
      }
    });
	if(number == 0){
		nothingfound.style.display = "block";
	}
  }

  searchInput.addEventListener("input", function () {
    const searchQuery = searchInput.value.trim();
    filterIcons(searchQuery);
  });
});

//registraciis forma
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
};














