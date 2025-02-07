// var name=document.querySelector("#name");
// var email=document.querySelector("#email")
var input=document.querySelectorAll('input[type="text"]')
var form=document.querySelector("form")
var p=document.querySelector('p');

form.addEventListener('submit', function(e){
    e.preventDefault();
    // if(name.value=="" || email.value==""){
    //     p.textContent="Please fill the fields";
    //     p.style.color="red"
    //     }else{
    //         p.textContent="Thank you for submitting the form";
    //         p.style.color="green";
    //     }
    // input.forEach(function(inp){
    //     if(inp.value==""){
    //         inp.style.border="2px solid red";
    //         p.textContent="Please fill the fields";
    //         p.style.color="red";
    //     }
    // })

    for(var i=0; i<input.length; i++){
        if(input[i].value.trim()===""){
            input[i].style.border="2px solid red";
            p.textContent="Please fill the fields";
            p.style.color="red";
            break;
        }
    }
         
})
