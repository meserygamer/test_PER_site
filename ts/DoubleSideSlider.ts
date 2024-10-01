import {
    DoubleSideSliderDTO
} from "./DoubleSideSliderDTO"


class DoubleSideSlider{

    private readonly _minValueRange : HTMLInputElement;
    private readonly _maxValueRange : HTMLInputElement;

    private readonly _minValueDisplay : HTMLElement;
    private readonly _maxValueDisplay : HTMLElement;

    public constructor(dto : DoubleSideSliderDTO){

        this._minValueRange = dto.minValueRange;
        this._minValueRange.addEventListener("input", this.minValueRangeChangedHandler);
        this._maxValueRange = dto.maxValueRange;
        this._maxValueRange.addEventListener("input", this.maxValueRangeChangedHandler);
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

    private minValueRangeChangedHandler(){
    
        if(this.rangeDelta < 0){

            this._minValueRange.value = this.maxValue.toString();
        }
        this._minValueDisplay.textContent = this._minValueRange.value;
    }

    private maxValueRangeChangedHandler(){
        
        if(this.rangeDelta < 0){

            this._maxValueRange.value = this.minValue.toString();
        }
        this._maxValueDisplay.textContent = this._maxValueRange.value;
    }
}

export {
    DoubleSideSlider
}
