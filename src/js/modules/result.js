class Result {
  constructor() {
    this.resultCounter = document.querySelector('.counter__result');
  }

  showCounter() {
    this.resultCounter.classList.remove('counter__result--hidden');
  }

  hiideCounter() {
    this.resultCounter.classList.add('counter__result--hidden');
  }
}

export default Result;
