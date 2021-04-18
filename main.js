console.log("Hi");
const buttonEl = document.querySelector(".prev");
const galleryEl = document.querySelector(".gallery");
let imgNum = 1;
buttonEl.addEventListener("click", (eventObject)=>{
    imgNum++;
    if(imgNum > 3) imgNum = 1;
    let imgString = "./images/image" + imgNum + ".jpg";
    galleryEl.setAttribute("src", imgString);
})
