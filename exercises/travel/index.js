var form = document.querySelector("form");
var button = document.querySelector("#button");
var dietry=[];
button.addEventListener("click", function () {
    
    for(var i =0; i < form.dietary.length; i++){
        if(form.dietary[i].checked===true){
            dietry.push(form.dietary[i].value);
        }
    }
    
    alert("firstname " + form.firstname.value + "\nlastname " + form.lastname.value + "\nage "+form.age.value + "\ngender " + form.gender.value + "\ntraveling to " + form.travelingto.value + "\ndietary "+dietry)
    
})

