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
const nav = document.getElementById('navBar');
const burger = document.getElementById('burgerBar');


burger.addEventListener('click', function(){
  nav.classList.toggle('activeNav')
})




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