let sliderImg = document.querySelector(".slider");
let sliderImgStack = document.querySelectorAll(".slider img");
let sliderBigImg = document.querySelector(".product-big-img");

sliderImg.addEventListener ("click", activeImg);
sliderImgNumber();

function activeImg(event) {
    
    if (event.target.dataset.active === 'false')
    {
        sliderImgStack.forEach(img => {
            img.dataset.active = 'false';
        });
        event.target.dataset.active = 'true';
        sliderBigImg.src = event.target.src;

    } 
    else
    {
        return;
    }
}

function sliderImgNumber() {
    let imgNumber = 0;

    sliderImgStack.forEach(img => {
        imgNumber ++;
    });

    if (imgNumber > 1 && imgNumber < 4) {
        // console.log(imgNumber);
        sliderImg.style.justifyContent = "start";
    }
} 

