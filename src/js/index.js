import Counter from './modules/counter.js';

const counterElement = document.querySelector('.counter');
const counter = new Counter(counterElement);

counter.init();
