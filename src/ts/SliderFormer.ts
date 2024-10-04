import { Slider } from "./Slider.js";
import { SliderDTO } from "./SliderDTO.js";

const sliders : HTMLElement[] = getAllSliders();
const formedSliders : Slider[] = [];
sliders.forEach(element => {
    formedSliders.push(formingSlider(element));
});

function getAllSliders() : HTMLElement[] {

    const sliderDivs : HTMLElement[] = [];
    document.querySelectorAll(".indicator_slider")
            .forEach(elem => {
                sliderDivs.push(<HTMLElement> elem);
            });
    return sliderDivs;
}

function formingSlider(sliderDiv : HTMLElement) : Slider {

    const sliderDTO : SliderDTO = {
        valueRange : <HTMLInputElement> sliderDiv.getElementsByClassName("slider_range")[0],
        valueDisplay : <HTMLElement> sliderDiv.getElementsByClassName("range_value")[0]
    }
    return new Slider(sliderDTO);
}