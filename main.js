const buttonFc = document.querySelector(".button-fc")
const bgText= document.querySelector(".bg-text")
const bgImg= document.querySelector("#bg-img")

buttonFc.onclick=()=>{
    bgText.style.display="block"
    buttonFc.style.display="none"
}

bgImg.onclick=()=>{
   bgImg.style.display="none"
}