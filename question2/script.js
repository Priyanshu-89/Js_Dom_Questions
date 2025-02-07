var btn=document.querySelector("#swap-button");
var image1=document.querySelector('#image1');
var image2=document.querySelector('#image2')

var swapBtn=btn.addEventListener('click',function(){
 var src1=image1.src;
 var src2=image2.src;
 image1.src=src2
 image2.src=src1

})