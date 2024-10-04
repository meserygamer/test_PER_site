import { SliderDTO } from "./SliderDTO.js";

class Slider{

    private readonly _valueRange : HTMLInputElement;

    private readonly _valueDisplay : HTMLElement;

    public constructor(dto : SliderDTO){

        this._valueRange = dto.valueRange;
        this._valueRange.addEventListener("input", this.getValueRangeChangedHandler());
        this._valueDisplay = dto.valueDisplay;
    }

    private getValueRangeChangedHandler() : () => void {

        let self : Slider = this;

        function func() : void {

            self._valueDisplay.textContent = self._valueRange.value;
        }
        return func;
    } 
}

export {
    Slider
}