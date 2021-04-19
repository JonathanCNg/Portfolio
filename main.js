console.log("Hi");
const buttonPrev = document.querySelector(".prev");
const buttonNext = document.querySelector(".next");
const galleryEl = document.querySelector(".gallery");
let imgNumCurr = 1;
const imgNumMax = 3;
buttonPrev.addEventListener("click", (eventObject)=>{
    console.log("COOKIES")
    imgNumCurr--;
    if(imgNumCurr < 1) imgNumCurr = imgNumMax;
    let imgString = "./images/image" + imgNumCurr + ".jpg";
    galleryEl.setAttribute("src", imgString);
})
buttonNext.addEventListener("click", (eventObject)=>{
    imgNumCurr++;
    if(imgNumCurr > imgNumMax) imgNumCurr = 1;
    let imgString = "./images/image" + imgNumCurr + ".jpg";
    galleryEl.setAttribute("src", imgString);
})

