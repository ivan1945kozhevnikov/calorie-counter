class Result {
  constructor(element) {
    this.root = element;
    this.calorieMinOutput = this.root.querySelector('#calories-minimal');
    this.calorieNormOutput = this.root.querySelector('#calories-norm');
    this.calorieMaxOutput = this.root.querySelector('#calories-maximal');
  }

  show(caloriesMin, caloriesNorm, caloriesMax) {
    this.root.classList.remove('counter__result--hidden');
    this.calorieMinOutput.textContent = Math.round(caloriesMin);
    this.calorieNormOutput.textContent = Math.round(caloriesNorm);
    this.calorieMaxOutput.textContent = Math.round(caloriesMax);
  }

  hide() {
    this.root.classList.add('counter__result--hidden');
  }
}

export default Result;
