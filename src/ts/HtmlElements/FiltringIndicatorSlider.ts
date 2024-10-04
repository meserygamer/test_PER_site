class FiltringIndicatorSlider extends HTMLElement{

    //#region Fields

    private readonly _valueRange : HTMLInputElement;

    private readonly _valueDisplay : HTMLSpanElement;

    //#endregion Fields

    public constructor(){

        super();

        this.buildElementHtmlStructure(<string> this.getAttribute("indicator_title"));

        this._valueRange = <HTMLInputElement> this.getElementsByClassName("slider_range")[0];
        this._valueDisplay = <HTMLElement> this.getElementsByClassName("range_value")[0];

        this._valueRange.addEventListener("input", this.getValueRangeChangedHandler());
    }

    //#region Properties

    public get value() : number {

        return this._valueRange.valueAsNumber;
    }
    
    //#endregion Properties

    //#region Methods

    private buildElementHtmlStructure(title : string){

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

    private getValueRangeChangedHandler() : () => void {

        let self : FiltringIndicatorSlider = this;

        function func() : void {

            self._valueDisplay.textContent = self._valueRange.value;
        }
        return func;
    } 

    //#endregion Methods
}

export{
    FiltringIndicatorSlider
}