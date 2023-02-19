let sliderImg = document.querySelector(".slider");
let sliderImgStack = document.querySelectorAll(".slider img");
let sliderBigImg = document.querySelector(".product-big-img");

console.log(sliderImg);

console.log(sliderBigImg.src);

sliderImg.addEventListener ("click", activeImg);

function activeImg(event) {
    if (event.target.dataset.active === 'false')
    {
        sliderImgStack.forEach(img => {
            img.dataset.active = 'false';
            console.log(img);
        });
        event.target.dataset.active = 'true';
        sliderBigImg.src = event.target.src;

    } 
    else
    {
        return;
    }
}