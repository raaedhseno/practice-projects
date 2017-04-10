var cheep = document.querySelector(".input")
var gomba = document.querySelector(".input2")
var boom = document.querySelector(".input4")
var button = document.querySelector(".button2")
button.addEventListener("click", function () {
    var cheeppp = document.querySelector(".input1");
    cheeppp.value = cheep.value * 5;
    var boomm = document.querySelector(".input5");
    boomm.value = boom.value * 11;
    var gombaas = document.querySelector(".input3");
    gombaas.value = gomba.value * 7;
    var total = document.querySelector(".input6")
    total.value = Number(boomm.value) + Number(gombaas.value) + Number(cheeppp.value);
});
//
//button.addEventListener("click", function (){
//
//});
//button.addEventListener("click", function() {
// 
//
//});