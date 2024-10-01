import { DoubleSideSlider } from "./DoubleSideSlider"
import { DoubleSideSliderDTO } from "./DoubleSideSliderDTO";

document.addEventListener("load", () => {
    slideOne();
    slideTwo();
});

const filtringIndicators : HTMLElement[] = getAllFiltringIndicators();
const formedDoubleSideSliders : DoubleSideSlider[] = [];
filtringIndicators.forEach(element => {
    formedDoubleSideSliders.push(formingDoubleSideSliderFromIndicatorDiv(element));
});

function getAllFiltringIndicators() : HTMLElement[] {

    const indicatorDivs : HTMLElement[] = [];
    document.querySelectorAll(".filtring_indicator_div")
            .forEach(elem => {
                indicatorDivs.push(<HTMLElement> elem);
            });
    return indicatorDivs;
}

function formingDoubleSideSliderFromIndicatorDiv(indicatorDiv : HTMLElement) : DoubleSideSlider {

    const sliderDTO : DoubleSideSliderDTO = {
        minValueRange : <HTMLInputElement> indicatorDiv.getElementsByClassName("slider_component_min")[0],
        maxValueRange : <HTMLInputElement> indicatorDiv.getElementsByClassName("slider_component_max")[0],
        minValueDisplay : <HTMLElement> indicatorDiv.getElementsByClassName("range_value")[0],
        maxValueDisplay : <HTMLElement> indicatorDiv.getElementsByClassName("range_value")[1]
    }
    return new DoubleSideSlider(sliderDTO);
}