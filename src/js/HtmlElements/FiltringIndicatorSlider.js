class FiltringIndicatorSlider extends HTMLElement {
    //#endregion Fields
    constructor() {
        super();
        this.buildElementHtmlStructure(this.getAttribute("indicator_title"));
        this._valueRange = this.getElementsByClassName("slider_range")[0];
        this._valueDisplay = this.getElementsByClassName("range_value")[0];
        this._valueRange.addEventListener("input", this.getValueRangeChangedHandler());
    }
    //#region Properties
    get value() {
        return this._valueRange.valueAsNumber;
    }
    //#endregion Properties
    //#region Methods
    buildElementHtmlStructure(title) {
        this.innerHTML =
            `<div class="filtring_indicator_div indicator_slider">
            <p>${title}</p>

            <div class="range_div">
                <div class="values">
                    <span class="range_value">
                        100
                    </span>
                </div>
                <div class="range_slider_container">
                    <div class="slider_track"></div>
                    <input type="range" min="100" max="2500" value="100" step="5" class="slider_range">
                </div>
            </div>
        </div>`;
    }
    getValueRangeChangedHandler() {
        let self = this;
        function func() {
            self._valueDisplay.textContent = self._valueRange.value;
        }
        return func;
    }
}
export { FiltringIndicatorSlider };
