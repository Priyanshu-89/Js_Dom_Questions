var about=document.querySelector('#about')
var home=document.querySelector('#home');
var gallery=document.querySelector('#gallery')


var hometext=document.querySelector('#hometext')
var aboutext=document.querySelector('#aboutext')
var gallerytext=document.querySelector('#gallerytext')

hometext.style.display='block'

home.addEventListener("click", function(){
    textRemove();
    hometext.style.display='block'
})

about.addEventListener("click", function(){
    textRemove();
    aboutext.style.display='block'
})

gallery.addEventListener("click", function(){
    textRemove();
    gallerytext.style.display='block'
})

function textRemove(){
    document.querySelectorAll('h4').forEach(function(h4){
        h4.style.display='none'
    })
}