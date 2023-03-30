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
    console.log(this.inputAge.value);
    console.log(this.inputHeight.value);
    console.log(this.inputWeight.value);
  }

  init() {
    this.inputAge.addEventListener('input', this._onFieldInput);
    this.inputHeight.addEventListener('input', this._onFieldInput);
    this.inputWeight.addEventListener('input', this._onFieldInput);
  }
}

export default Counter;
