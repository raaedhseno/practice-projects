var box= document.querySelector(".dj-box");
box.addEventListener("click",function(){
   box.style.backgroundColor="red"
   box.style.borderRadius="40%"
});
box.addEventListener("mouseenter",function(){
    box.style.background="black"
     box.style.borderRadius="50%"
});
box.addEventListener("mouseleave",function(){
    box.style.background="brown"
     box.style.borderRadius="80%"
    
});
window.addEventListener("scroll",function(){
    box.style.background="hotpink"
     box.style.borderRadius="20%"
});
window.addEventListener("keyup",function(Event){
    console.log(Event.which);
if(Event.which===82){
    box.style.background="red"
}else if(Event.which===65){
    box.style.background="black";
    box.style.borderRadius="10%";
}
});

