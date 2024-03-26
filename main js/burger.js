'use strict'
'use strict'
//burgeri//

//window.onscroll = function() {myFunction()};
//const header = document.getElementById('nav-bar');
//var sticky = header.offsetTop

//function myFunction() {
  //if (window.pageYOffset > sticky) {
    //header.classList.add("sticky");
  //} else {
    //header.classList.remove("sticky");
 // }
//}


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

//indexis forma
const form2 = document.getElementById('Login');

form2.addEventListener('submit',function ne (e) {
    e.preventDefault();


    let checkbox1 = document.getElementById('save');
    if (checkbox1.checked) {
        let usernameValue = document.getElementById('name').value;
        Cookies.set('saved-name',usernameValue)   
    } else{
        Cookies.remove('saved-name');
    }


    let checkbox2 = document.getElementById('save');
    if (checkbox2.checked) {
        let usernamepassword = document.getElementById('passw').value;
        Cookies.set('saved-pasw',usernamepassword)   
    } else{
        Cookies.remove('saved-pasw');
    }
    //e.target.submit();
})


let savedUsername =Cookies.get('saved-name')
if (savedUsername) {
    //document.getElementById('name').value=savedUsername;
    //document.getElementById('save').checkbox = true;
}

let savedUserpasw = Cookies.get('saved-pasw');
if (savedUserpasw) {
    //document.getElementById('passw').value=savedUserpasw;
   // document.getElementById('save').checkbox = true;
}