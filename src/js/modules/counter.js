import formatInput from '../utils/formatInput.js';

class Counter {
  constructor(element) {
    this.root = element;
    this.spanMin = document.getElementById('calories-minimal');
    this.spanNorm = document.getElementById('calories-norm');
    this.spanMax = document.getElementById('calories-maximal');

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
    this.result.classList.remove('counter__result--hidden');
    const PERCENTAGE = 0.15;
    const MIN_COEF = 1.2;
    const LOW_COEF = 1.375;
    const MEDIUM_COEF = 1.55;
    const HIGH_COEF = 1.725;
    const MAX_COEF = 1.9;

    if (this.genderRadios.value === 'male') {
      const N =
        10 * this.weightInput.value +
        6.25 * this.heightInput.value -
        5 * this.ageInput.value +
        5;
      this.spanMin.textContent = N - N * PERCENTAGE;
      this.spanMax.textContent = N * PERCENTAGE + N;
      if (this.activityRadios.value === 'min') {
        const weighMaintenance = N * MIN_COEF;
        this.spanNorm.textContent = weighMaintenance;
      }
      if (this.activityRadios.value === 'low') {
        const weighMaintenance = N * LOW_COEF;
        this.spanNorm.textContent = weighMaintenance;
      }
      if (this.activityRadios.value === 'medium') {
        const weighMaintenance = N * MEDIUM_COEF;
        this.spanNorm.textContent = weighMaintenance;
      }
      if (this.activityRadios.value === 'high') {
        const weighMaintenance = N * HIGH_COEF;
        this.spanNorm.textContent = weighMaintenance;
      }
      if (this.activityRadios.value === 'max') {
        const weighMaintenance = N * MAX_COEF;
        this.spanNorm.textContent = weighMaintenance;
      }
    }
    if (this.genderRadios.value === 'female') {
      const N =
        10 * this.weightInput.value +
        6.25 * this.heightInput.value -
        5 * this.ageInput.value -
        161;
      this.spanMin.textContent = N - N * PERCENTAGE;
      this.spanMax.textContent = N * PERCENTAGE + N;
      if (this.activityRadios.value === 'min') {
        const weighMaintenance = N * MIN_COEF;
        this.spanNorm.textContent = weighMaintenance;
      }
      if (this.activityRadios.value === 'low') {
        const weighMaintenance = N * LOW_COEF;
        this.spanNorm.textContent = weighMaintenance;
      }
      if (this.activityRadios.value === 'medium') {
        const weighMaintenance = N * MEDIUM_COEF;
        this.spanNorm.textContent = weighMaintenance;
      }
      if (this.activityRadios.value === 'high') {
        const weighMaintenance = N * HIGH_COEF;
        this.spanNorm.textContent = weighMaintenance;
      }
      if (this.activityRadios.value === 'max') {
        const weighMaintenance = N * MAX_COEF;
        this.spanNorm.textContent = weighMaintenance;
      }
    }
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
