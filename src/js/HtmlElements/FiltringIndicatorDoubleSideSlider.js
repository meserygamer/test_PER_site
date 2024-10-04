class FiltringIndicatorDoubleSideSlider extends HTMLElement {
    //#endregion Fields
    constructor() {
        super();
        this.buildElementHtmlStructure(this.getAttribute("indicator_title"));
        this._minValueRange = this.getElementsByClassName("slider_component_min")[0];
        this._maxValueRange = this.getElementsByClassName("slider_component_max")[0];
        this._minValueDisplay = this.getElementsByClassName("range_value")[0];
        this._maxValueDisplay = this.getElementsByClassName("range_value")[1];
        this._minValueRange.addEventListener("input", this.getMinValueRangeChangedHandler());
        this._maxValueRange.addEventListener("input", this.getMaxValueRangeChangedHandler());
    }
    //#region Properties
    get minValue() {
        return this._minValueRange.valueAsNumber;
    }
    get maxValue() {
        return this._maxValueRange.valueAsNumber;
    }
    get rangeDelta() {
        return this.maxValue - this.minValue;
    }
    //#endregion Properties
    //#region Methods
    buildElementHtmlStructure(title) {
        this.innerHTML =
            `<div class="filtring_indicator_div indicator_double_slider">
            <p>${title}</p>

            <div class="range_div">
                <div class="values">
                    <span class="range_value">
                        0
                    </span>
                    <span> &dash; </span>
                    <span class="range_value">
                        10
                    </span>
                </div>
                <div class="range_slider_container">
                    <div class="slider_track"></div>
                    <input type="range" min="0" max="10" value="0" step="0.1" class="slider_component_min">
                    <input type="range" min="0" max="10" value="10" step="0.1" class="slider_component_max">
                </div>
            </div>
        </div>`;
    }
    getMinValueRangeChangedHandler() {
        let self = this;
        function func() {
            if (self.rangeDelta < 0) {
                self._minValueRange.value = self.maxValue.toString();
            }
            self._minValueDisplay.textContent = self._minValueRange.value;
        }
        return func;
    }
    getMaxValueRangeChangedHandler() {
        let self = this;
        function func() {
            if (self.rangeDelta < 0) {
                self._maxValueRange.value = self.minValue.toString();
            }
            self._maxValueDisplay.textContent = self._maxValueRange.value;
        }
        return func;
    }
}
export { FiltringIndicatorDoubleSideSlider };
