




// function getQueryParameter(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// const userName = "";
// document.addEventListener("DOMContentLoaded", function () {
//      userName = getQueryParameter("username");
// });
// Function to get a specific query parameter from the URL
function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param); // Returns the parameter value
}

document.addEventListener("DOMContentLoaded", function () {
    // const userName = "BUDDY";
    const userName = getQueryParameter("username"); // Get 'username' from URL parameters
    console.log(userName);
    // Check if the button with class 'btn-outline-dark' exists
    const button = document.querySelector(".btn-outline-dark"); 

    if(userName.length == null ) userName = "BUDDY";
    if (button && userName) { // Ensure button and userName are defined
        button.textContent = `Welcome, ${userName}`; // Set button text
    }
});


    //create DOM Elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');


    //Atteching the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  

    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;


    //setting elements classnames
    slide.className = 'slider';
    content.className='slide-content';
    h1.className='movie-title';
    

    sliders.push(slide);
    if(sliders.length)
    {
        sliders[0].style.marginLeft=`calc(-${100 *(sliders.length-2)}% - ${ 30* (sliders.length -2)}px)`;
    }

    
for(let i=0;i<3;i++)
{
    createslide();
}

setInterval(() =>{
    createslide();
},3000);
