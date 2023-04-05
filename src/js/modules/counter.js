import formatInput from '../utils/formatInput.js';

class Counter {
  constructor(element) {
    this.root = element;
    this.form = this.root.querySelector('.counter__form');
    this.inputsGroup = this.form.querySelector('.inputs-group');
    this.elements = this.form.elements;
    this.ageInput = this.elements.age;
    this.heightInput = this.elements.height;
    this.weightInput = this.elements.weight;
    this.resetButton = this.elements.reset;
    this.submitButton = this.elements.submit;

    this._onFieldInput = this._onFieldInput.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
  }

  _onFieldInput(evt) {
    const { target } = evt;

    if (target.closest(`.${this.inputsGroup.className}`)) {
      target.value = formatInput(target);
    }

    this.submitButton.disabled = !this.form.checkValidity();
    this.resetButton.disabled = !this.form.checkValidity();

    console.log(target.value);
  }

  _onFormReset() {
    this.submitButton.disabled = true;
    this.resetButton.disabled = true;
  }

  init() {
    this.form.addEventListener('input', this._onFieldInput);
    this.form.addEventListener('reset', this._onFormReset);
  }
}

export default Counter;
