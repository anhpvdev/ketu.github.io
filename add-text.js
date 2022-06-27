

var addtext = document.getElementById('addtext');
var context = addtext.getContext('2d');
var mouseX=0;
var mouseY=0;
var startingX=0;

// lấy vị trí con trỏ add text
addtext.addEventListener('click', function(e){
    
    mouseX = e.clientX - canvas.getBoundingClientRect().left
    mouseY = e.clientY - canvas.getBoundingClientRect().top
    startingX = mouseX

    console.log(mouseX, mouseY)
})

document.addEventListener("keydown",function(e){
    context.font = "20px Arial"
    if(e.keycode === 13 )
    context.fillText(e.key, mouseX, mouseY);
    mouseX += context.measureText(e.key).width
    
})