


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

//postebi//
const postwraper = document.getElementById('postblock');
const overlay = document.getElementById('overlay');
const postcontent = document.getElementById('content');
const overlayclose = document.getElementById('close');
const btnadd =document.getElementById('add');
const addoverlay = document.getElementById('addoverlay');
const form = document.getElementById('form-addoverlay');
function ajax(url,callback) {    
    fetch(url, {
        method: "GET",
    })
    .then((response)=>{
        if (response.status !==200) {
         throw "error" ;         
        } 
        return response.json();
    })
    .then((responseData)=>{
        callback(responseData);
    })
    .catch((error)=> console.log(error))
}

ajax('https://jsonplaceholder.typicode.com/posts',function (data) {
    data.forEach(element => {
       //console.log(element);
       post(element) 
    });
    
})


function post(item) {
    const divcontainer= document.createElement('div');
    divcontainer.classList.add('post');
    divcontainer.setAttribute('data-id', item.id);

    const posth1 = document.createElement('h1');
    posth1.innerText = item.id;
    const posth2 = document.createElement('h2');
    posth2.innerText= item.title;
    const deletebtn = document.createElement('button');
    deletebtn.textContent = "delete post";

    divcontainer.appendChild(posth1);
    divcontainer.appendChild(posth2);
    divcontainer.appendChild(deletebtn);

    deletebtn.addEventListener('click' ,function (e) {
        e.stopPropagation();
        console.log(e.target);
        const deleteId = e.target.getAttribute('data-id');
        console.log(deleteId);
        const deleteUrl = `https://jsonplaceholder.typicode.com/posts${deleteId}`
        console.log(deleteUrl);

        fetch(deleteUrl,{
            method: "DELETE"
        })
        .then((response)=>response.json())
        .then(function(deleteData){
            console.log(deleteData);
            divcontainer.remove();
        });

    })

    divcontainer.addEventListener('click', function () {
        console.log(this);
        const postid = this.getAttribute('data-id');
        overlay.classList.add('activoverlay');
        const newUrlpost = `https://jsonplaceholder.typicode.com/posts${postid}`;
        ajax(newUrlpost, function (elementNew) {
            console.log(elementNew);
            overlaiInfo(elementNew);
        });
    })

    postwraper.appendChild(divcontainer);
    
}

function overlaiInfo(item) {
    const pdesc = document.createElement('p');
    pdesc.innerText = item.body;

    content.appendChild(pdesc);
    
}

overlayclose.addEventListener('click', function () {
    overlay.classList.remove("activoverlay");
    content.innerText = "";
    
})

btnadd.addEventListener('click',function () {
    addoverlay.classList.add('activadd');
    document.getElementById('titlepost').value ="";
    
})