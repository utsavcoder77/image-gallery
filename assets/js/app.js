let imgOne = document.getElementById("image1");
let imgTwo = document.getElementById("image2");
let imgThree = document.getElementById("image3");
let imgFour = document.getElementById("image4");
let imgFive = document.getElementById("image5");
let imgSix = document.getElementById("image6");
let fullSize = document.getElementById("full-size");



function enlargeImg() {
   fullSize.style.display = "flex";
}

function showButton() {
   fullSize.style.display = "none";
}

document.getElementById("image1").addEventListener("click", enlargeImg);
document.getElementById("image2").addEventListener("click", enlargeImg);
document.getElementById("image3").addEventListener("click", enlargeImg);
document.getElementById("image4").addEventListener("click", enlargeImg);
document.getElementById("image5").addEventListener("click", enlargeImg);
document.getElementById("image6").addEventListener("click", enlargeImg);
document.getElementById("cross-button").addEventListener("click", showButton);
