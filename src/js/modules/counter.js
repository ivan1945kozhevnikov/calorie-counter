import formatInput from '../utils/formatInput.js';
import {
  PhysicalActivityRatio,
  PhysicalParametersRatio,
  LossGainWeightPercentage,
} from '../utils/const.js';

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
    this._onFormSubmit = this._onFormSubmit.bind(this);
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

  _onFormSubmit(evt) {
    evt.preventDefault();
    console.log(this.calculateMinCalorie());
    console.log(this.calculateMaxCalorie());
  }

  _onFormReset() {
    this.submitButton.disabled = true;
    this.result.classList.add('counter__result--hidden');
    this.resetButton.disabled = true;
  }

  calculateNormalCalorie() {
    return (
      PhysicalParametersRatio.WEIGHT * this.weightInput.value +
      PhysicalParametersRatio.HEIGHT * this.heightInput.value +
      PhysicalParametersRatio.AGE * this.ageInput.value +
      PhysicalParametersRatio[this.genderRadios.value.toUpperCase()] *
        PhysicalActivityRatio[this.activityRadios.value.toUpperCase()]
    );
  }

  calculateMinCalorie() {
    return this.calculateNormalCalorie() * LossGainWeightPercentage.WEIGHT_LOSS;
  }

  calculateMaxCalorie() {
    return this.calculateNormalCalorie() * LossGainWeightPercentage.WEIGHT_GAIN;
  }

  init() {
    this.form.addEventListener('input', this._onFieldInput);
    this.form.addEventListener('submit', this._onFormSubmit);
    this.form.addEventListener('reset', this._onFormReset);
  }
}

export default Counter;
