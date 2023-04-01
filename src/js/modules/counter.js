import formatInput from '../utils/formatInput.js';

class Counter {
  constructor(element) {
    this.root = element;
    this.form = this.root.querySelector('.counter__form');
    this.elements = this.form.elements;
    this.inputAge = this.elements.age;
    this.inputHeight = this.elements.height;
    this.inputWeight = this.elements.weight;

    this._onFieldInput = this._onFieldInput.bind(this);
  }

  _onFieldInput() {
    this.inputAge.value = formatInput(this.inputAge);
    this.inputHeight.value = formatInput(this.inputHeight);
    this.inputWeight.value = formatInput(this.inputWeight);
  }

  init() {
    this.inputAge.addEventListener('input', this._onFieldInput);
    this.inputHeight.addEventListener('input', this._onFieldInput);
    this.inputWeight.addEventListener('input', this._onFieldInput);
  }
}

export default Counter;
