import formatInput from '../utils/formatInput.js';

class Counter {
  constructor(element) {
    this.root = element;
    this.form = this.root.querySelector('.counter__form');
    this.elements = this.form.elements;
    this.ageInput = this.elements.age;
    this.heightInput = this.elements.height;
    this.weightInput = this.elements.weight;
    this.resetButton = this.elements.reset;
    this.submitButton = this.elements.submit;

    this._onFieldInput = this._onFieldInput.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
  }

  _onFieldInput() {
    this.ageInput.value = formatInput(this.ageInput);
    this.heightInput.value = formatInput(this.heightInput);
    this.weightInput.value = formatInput(this.weightInput);

    if (this.form.checkValidity()) {
      this.submitButton.disabled = false;
      this.resetButton.disabled = false;
    }
  }

  _onFormReset() {
    this.submitButton.disabled = true;
    this.resetButton.disabled = true;
  }

  init() {
    this.ageInput.addEventListener('input', this._onFieldInput);
    this.heightInput.addEventListener('input', this._onFieldInput);
    this.weightInput.addEventListener('input', this._onFieldInput);
    this.form.addEventListener('reset', this._onFormReset);
  }
}

export default Counter;
