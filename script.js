
console.log("hello");
// console.alert('hey');
var b = document.querySelector(".navBar");
// var c= document.querySelector(".mid_contaner");
// var d= document.querySelector("#head");
var logPage= document.querySelector(".logPage");
var hidden = document.querySelector(".hidden")


// var editio= document.querySelector(".EditionalPage");

document.querySelector("#subBtn").addEventListener("click",function(){
    // b.style.display="block";
    // c.style.display="block";
    hidden.style.display="block";
    logPage.style.display="none";

})


function abc(){
    
var a = document.querySelector(".icon");
var b = document.querySelector(".navBar");
var c= document.querySelector(".cutIcon");

a.addEventListener("click",function(){
    b.style.display="block";
    // b.style.transition=".3s";
    
})

c.addEventListener("click",function(){
    b.style.display="none";
    // b.style.transition=".3s";
    
})


}

// abc();


 function login(){
       
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var c= document.querySelector(".mid_contaner");
var d= document.querySelector("#head");
var logPage= document.querySelector(".logPage");
var editio= document.querySelector(".EditionalPage");

btn1.addEventListener("click",function(){
    logPage.style.display="flex";
    d.style.display="none";
    c.style.display="none";
    editio.style.display="none";
})
}
 //login();


