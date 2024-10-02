import { DoubleSideSlider } from "./DoubleSideSlider.js";
const filtringIndicators = getAllFiltringIndicators();
const formedDoubleSideSliders = [];
filtringIndicators.forEach(element => {
    formedDoubleSideSliders.push(formingDoubleSideSliderFromIndicatorDiv(element));
});
function getAllFiltringIndicators() {
    const indicatorDivs = [];
    document.querySelectorAll(".filtring_indicator_div")
        .forEach(elem => {
        indicatorDivs.push(elem);
    });
    return indicatorDivs;
}
function formingDoubleSideSliderFromIndicatorDiv(indicatorDiv) {
    const sliderDTO = {
        minValueRange: indicatorDiv.getElementsByClassName("slider_component_min")[0],
        maxValueRange: indicatorDiv.getElementsByClassName("slider_component_max")[0],
        minValueDisplay: indicatorDiv.getElementsByClassName("range_value")[0],
        maxValueDisplay: indicatorDiv.getElementsByClassName("range_value")[1]
    };
    return new DoubleSideSlider(sliderDTO);
}
