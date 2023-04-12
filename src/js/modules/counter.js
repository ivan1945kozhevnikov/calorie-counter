import formatInput from '../utils/formatInput.js';

class Counter {
  constructor(element) {
    this.root = element;
    this.form = this.root.querySelector('.counter__form');
    this.result = this.root.querySelector('.counter__result');
    this.inputsGroup = this.form.querySelector('.inputs-group');
    this.activityRadios = this.form.activity;
    this.elements = this.form.elements;
    this.genderRadios = this.elements.gender;
    this.ageInput = this.elements.age;
    this.heightInput = this.elements.height;
    this.weightInput = this.elements.weight;
    this.resetButton = this.elements.reset;
    this.submitButton = this.elements.submit;

    this._onFieldInput = this._onFieldInput.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
  }

  _onFieldInput(evt) {
    const { target } = evt;

    if (target.closest(`.${this.inputsGroup.className}`)) {
      target.value = formatInput(target);
    }

    this.submitButton.disabled = !this.form.checkValidity();
    this.resetButton.disabled = !this.form.checkValidity();
  }

  _onButtonClick() {
    this.submitButton.setAttribute('type', 'button');
  }

  _onFormReset() {
    this.submitButton.disabled = true;
    this.result.classList.add('counter__result--hidden');
    this.resetButton.disabled = true;
  }

  init() {
    this.form.addEventListener('input', this._onFieldInput);
    this.submitButton.addEventListener('click', this._onButtonClick);
    this.form.addEventListener('reset', this._onFormReset);
  }
}

export default Counter;
