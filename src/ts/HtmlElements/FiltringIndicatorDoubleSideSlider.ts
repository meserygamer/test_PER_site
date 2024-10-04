class FiltringIndicatorDoubleSideSlider extends HTMLElement{

    //#region Fields

    private readonly _minValueRange : HTMLInputElement;
    private readonly _maxValueRange : HTMLInputElement;

    private readonly _minValueDisplay : HTMLSpanElement;
    private readonly _maxValueDisplay : HTMLSpanElement;

    //#endregion Fields

    public constructor(){

        super();

        this.buildElementHtmlStructure(<string> this.getAttribute("indicator_title"));

        this._minValueRange = <HTMLInputElement> this.getElementsByClassName("slider_component_min")[0];
        this._maxValueRange = <HTMLInputElement> this.getElementsByClassName("slider_component_max")[0];
        this._minValueDisplay = <HTMLElement> this.getElementsByClassName("range_value")[0];
        this._maxValueDisplay = <HTMLElement> this.getElementsByClassName("range_value")[1];

        this._minValueRange.addEventListener("input", this.getMinValueRangeChangedHandler());
        this._maxValueRange.addEventListener("input", this.getMaxValueRangeChangedHandler());
    }

    //#region Properties

    public get minValue() : number {

        return this._minValueRange.valueAsNumber;
    }

    public get maxValue() : number {

        return this._maxValueRange.valueAsNumber;
    }

    public get rangeDelta() : number {

        return this.maxValue - this.minValue;
    }
    
    //#endregion Properties

    //#region Methods

    private buildElementHtmlStructure(title : string){

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

    private getMinValueRangeChangedHandler() : () => void {
    
        let self : FiltringIndicatorDoubleSideSlider = this;

        function func() : void {

            if(self.rangeDelta < 0){

                self._minValueRange.value = self.maxValue.toString();
            }
            self._minValueDisplay.textContent = self._minValueRange.value;
        }
        return func;
    }

    private getMaxValueRangeChangedHandler() : () => void {
        
        let self : FiltringIndicatorDoubleSideSlider = this;

        function func() : void {

            if(self.rangeDelta < 0){

                self._maxValueRange.value = self.minValue.toString();
            }
            self._maxValueDisplay.textContent = self._maxValueRange.value;
        }
        return func;
    }

    //#endregion Methods
}

export{
    FiltringIndicatorDoubleSideSlider
}