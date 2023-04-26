let img = document.getElementsByTagName('img');
for (let index = 0; index < img.length; index++) {
    const element = img[index];
    if(element.getAttribute("src").includes('png')){

//p after img

// element.parentNode.getElementsByTagName("p")[0].classList.add("img_first_p")
// element.parentNode.getElementsByTagName("p")[1].classList.add("img_second_p")



// div parent img 
element.parentNode.classList.add('d-flex' , 'flex-column')
element.parentNode.style.justifyContent = "center";
element.parentNode.style.alignItems = "center";


        }
  
}


let row = document.getElementsByClassName('row');
for (let index = 0; index < row.length; index++) {
row[index].classList.add('reset')
}
