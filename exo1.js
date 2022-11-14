const input = document.querySelector('input')


input.addEventListener('input', function (){
    // 
     
 const div = document.createElement('div')
 div.className ='square'
 div.style.backgroundColor = input.value
 
 document.body.prepend(div) 

}) 