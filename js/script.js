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
window.scroll(gop())

function gop(){
    window.scrollTo({ top: 410, left: 0, behavior: 'smooth' });
}