const btnnav = document.querySelector(".nav-btn")
btnnav.addEventListener("click",() => {
const nav = document.querySelector("#nav")
if(nav.getAttribute("data-click") === "true"){
nav.setAttribute("data-click","false")
btnnav.innerHTML = "x"
}else{
btnnav.innerHTML = "≣"
nav.setAttribute("data-click","true")
}

}

)
window.onscroll = function() {scrollf()};

function scrollf(){


// const element = document.getElementById("myDIV");
let x = document.body.scrollLeft;
let y = document.body.scrollTop;
console.log("Horizontally: " + x + " Vertically: " + y)
}



window.onload(gop())


function gop(){
    window.location.href = "#sec-6"
    // const secfive =  document.getElementById("sec-5")
    // secfive.scrollIntoView();

}


