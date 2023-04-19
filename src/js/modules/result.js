class Result {
  constructor(element) {
    this.root = element;
    this.result = this.root.querySelector('.counter__result');
    this.calorieMinOutput = this.result.querySelector('#calories-minimal');
    this.calorieNormOutput = this.result.querySelector('#calories-norm');
    this.calorieMaxOutput = this.result.querySelector('#calories-maximal');
  }

  show(caloriesMin, caloriesNorm, caloriesMax) {
    this.result.classList.remove('counter__result--hidden');
    this.calorieMinOutput.textContent = Math.round(caloriesMin);
    this.calorieNormOutput.textContent = Math.round(caloriesNorm);
    this.calorieMaxOutput.textContent = Math.round(caloriesMax);
  }

  hide() {
    this.result.classList.add('counter__result--hidden');
  }
}

export default Result;
