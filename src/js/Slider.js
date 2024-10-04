class Slider {
    constructor(dto) {
        this._valueRange = dto.valueRange;
        this._valueRange.addEventListener("input", this.getValueRangeChangedHandler());
        this._valueDisplay = dto.valueDisplay;
    }
    getValueRangeChangedHandler() {
        let self = this;
        function func() {
            self._valueDisplay.textContent = self._valueRange.value;
        }
        return func;
    }
}
export { Slider };
