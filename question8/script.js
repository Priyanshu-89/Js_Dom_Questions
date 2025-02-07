var input=document.querySelector('input')
var data = [
    {
        name: 'harsh',
        src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D'
    },
    {
        name: 'harshita',
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "John",
        src: "https://media.istockphoto.com/id/1196532691/photo/full-length-of-handsome-young-man-wearing-a-green-t-shirt-and-black-jeans-walking-on-a-road.webp?a=1&b=1&s=612x612&w=0&k=20&c=R5dJSSkHPMtOL3QbwYEZZm9TTgaDGXpSr8DnYBP803k="
    },
    {
        name: "Rahul",
        src: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbiUyMG1vZGVsfGVufDB8fDB8fHww"
    }
]
var person = "";

data.forEach(function (elem) {
    person += ` <div class="person">
               <div class="img">
                <img src=${elem.src} alt="Person 1">
                
               </div>
               <h4>${elem.name}</h4>
            </div>`
})

document.querySelector('.people').innerHTML = person

input.addEventListener('input', function(data){
var matching=data.filter(function(e){
    return e.name.toLowerCase().startsWith(input.value.toLowerCase());
})
var matched=""
matching.forEach(function (elem) {
    matched += ` <div class="person">
               <div class="img">
                <img src=${elem.src} alt="Person 1">
                
               </div>
               <h4>${elem.name}</h4>
            </div>`
})

document.querySelector('.people').innerHTML = matched
})