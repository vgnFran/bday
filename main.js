const buttonFc = document.querySelector(".button-fc")
const bgText= document.querySelector(".bg-text")
const bgImg= document.querySelector("#bg-img")
const travel= document.querySelector(".travel")
const plane= document.querySelector(".core-page-loader")
const bgFin= document.querySelector("#bg-img-fin")
const fc= document.querySelector(".fc")
const other=document.querySelector(".other")
const another=document.querySelector(".another")

buttonFc.onclick=()=>{
    bgText.style.display="block"
    buttonFc.style.display="none"
    travel.style.display="block"
    fc.style.display="none"
}

travel.onclick=()=>{
    plane.style.display="block"
    setTimeout(()=>{
        plane.style.display="none"
        bgText.style.display="none"
        bgImg.style.display="none"
        travel.style.display="none"
        bgFin.style.display="block"
        other.style.display="block"
        another.style.display="block"
    },2000)
}