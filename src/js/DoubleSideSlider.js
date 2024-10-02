class DoubleSideSlider {
    constructor(dto) {
        this._minValueRange = dto.minValueRange;
        this._minValueRange.addEventListener("input", this.getMinValueRangeChangedHandler());
        this._maxValueRange = dto.maxValueRange;
        this._maxValueRange.addEventListener("input", this.getMaxValueRangeChangedHandler());
        this._minValueDisplay = dto.minValueDisplay;
        this._maxValueDisplay = dto.maxValueDisplay;
    }
    get minValue() {
        return this._minValueRange.valueAsNumber;
    }
    get maxValue() {
        return this._maxValueRange.valueAsNumber;
    }
    get rangeDelta() {
        return this.maxValue - this.minValue;
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
export { DoubleSideSlider };
