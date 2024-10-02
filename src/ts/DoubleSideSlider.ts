import {
    DoubleSideSliderDTO
} from "./DoubleSideSliderDTO.js"


class DoubleSideSlider{

    private readonly _minValueRange : HTMLInputElement;
    private readonly _maxValueRange : HTMLInputElement;

    private readonly _minValueDisplay : HTMLElement;
    private readonly _maxValueDisplay : HTMLElement;

    public constructor(dto : DoubleSideSliderDTO){

        this._minValueRange = dto.minValueRange;
        this._minValueRange.addEventListener("input", this.getMinValueRangeChangedHandler());
        this._maxValueRange = dto.maxValueRange;
        this._maxValueRange.addEventListener("input", this.getMaxValueRangeChangedHandler());
        this._minValueDisplay = dto.minValueDisplay;
        this._maxValueDisplay = dto.maxValueDisplay;
    }

    public get minValue() : number {

        return this._minValueRange.valueAsNumber;
    }

    public get maxValue() : number {

        return this._maxValueRange.valueAsNumber;
    }

    public get rangeDelta() : number {

        return this.maxValue - this.minValue;
    } 

    private getMinValueRangeChangedHandler() : () => any {
    
        let self : DoubleSideSlider = this;

        function func() : any {

            if(self.rangeDelta < 0){

                self._minValueRange.value = self.maxValue.toString();
            }
            self._minValueDisplay.textContent = self._minValueRange.value;
        }
        return func;
    }

    private getMaxValueRangeChangedHandler() : () => any {
        
        let self : DoubleSideSlider = this;

        function func() : any {

            if(self.rangeDelta < 0){

                self._maxValueRange.value = self.minValue.toString();
            }
            self._maxValueDisplay.textContent = self._maxValueRange.value;
        }
        return func;
    }
}

export {
    DoubleSideSlider
}
