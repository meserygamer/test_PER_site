import { Slider } from "./Slider.js";
const sliders = getAllSliders();
const formedSliders = [];
sliders.forEach(element => {
    formedSliders.push(formingSlider(element));
});
function getAllSliders() {
    const sliderDivs = [];
    document.querySelectorAll(".indicator_slider")
        .forEach(elem => {
        sliderDivs.push(elem);
    });
    return sliderDivs;
}
function formingSlider(sliderDiv) {
    const sliderDTO = {
        valueRange: sliderDiv.getElementsByClassName("slider_range")[0],
        valueDisplay: sliderDiv.getElementsByClassName("range_value")[0]
    };
    return new Slider(sliderDTO);
}
