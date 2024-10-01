document.addEventListener("load", () => {
    slideOne();
    slideTwo();
});

let sliderOne = document.getElementsByClassName("slider_component_min")[0];
let sliderTwo = document.getElementsByClassName("slider_component_max")[0];
let displayValOne = document.getElementsByClassName("range_value")[0];
let displayValTwo = document.getElementsByClassName("range_value")[1];
let minGap = 0;
let sliderTrack = document.querySelector(".slider_track");
let sliderMaxValue = sliderOne.max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = (parseInt(sliderTwo.value) - minGap);
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}

function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = (parseInt(sliderOne.value) + minGap);
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}

function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `#dadae5`;
}