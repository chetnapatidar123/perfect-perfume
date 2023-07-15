// external js: flickity.pkgd.js
var img1 = document.querySelector(".page10 .img1")
var img2 = document.querySelector(".page10 .img2")
var img3 = document.querySelector(".page10 .img3")
var image1 = document.querySelector(".page9 .image1")
var image2 = document.querySelector(".page9 .image2")
var image3 = document.querySelector(".page9 .image3")

img1.addEventListener("click",function(){
    image1.style.opacity = "1";
    image1.style.color = "red"
    image2.style.opacity = "0";
    image3.style.opacity = "0";

})

img2.addEventListener("click",function(){  
image2.style.opacity = "1"
image2.style.color = "blue"
image3.style.opacity = "0";
image1.style.opacity = "0";
})

img3.addEventListener("click",function(){
    image3.style.opacity = "1";
    image3.style.color = "darkgreen"
    image2.style.opacity = "0";
    image1.style.opacity = "0";
})

// var menu = document.querySelector(".ri-menu-3-line")
// var navmobmiddle = document.querySelector(".nav-mobmiddle")

// flag = 0;
// menu.addEventListener("click", function(){
//     if(flag == 0){
//         navmobmiddle.style.transform = "translateX(0)"
//         flag = 1;
//     }
//     else{
//         navmobmiddle.style.transform = "translateX(120%)"
//         flag = 0;
//     }
// })


    