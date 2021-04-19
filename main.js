const buttonPrev = document.querySelector(".prev");
const buttonNext = document.querySelector(".next");
const galleryEl = document.querySelector(".carouselImages");
let imgNumCurr = 1;
const imgNumMax = 5;
buttonPrev.addEventListener("click", (eventObject)=>{
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

