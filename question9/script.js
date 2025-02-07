var txt=document.querySelector('textarea')
var counter=document.querySelector('#counter')
txt.addEventListener('input', function(){
   counter.textContent=txt.value.length

})