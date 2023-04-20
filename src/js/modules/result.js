import formatNumber from '../utils/createFormatter.js';

class Result {
  constructor(element) {
    this.root = element;
    this.result = this.root.querySelector('.counter__result');
    this.calorieMinOutput = this.result.querySelector('#calories-minimal');
    this.calorieNormOutput = this.result.querySelector('#calories-norm');
    this.calorieMaxOutput = this.result.querySelector('#calories-maximal');
  }

  show(caloriesMin, caloriesNorm, caloriesMax) {
    const formatNumb = formatNumber();
    this.result.classList.remove('counter__result--hidden');
    this.calorieMinOutput.textContent = formatNumb.format(
      Math.round(caloriesMin)
    );
    this.calorieNormOutput.textContent = formatNumb.format(
      Math.round(caloriesNorm)
    );
    this.calorieMaxOutput.textContent = formatNumb.format(
      Math.round(caloriesMax)
    );
    this.root.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
    });
  }

  hide() {
    this.result.classList.add('counter__result--hidden');
    this.root.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
}

export default Result;
