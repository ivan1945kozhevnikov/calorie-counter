const LEAD_ZERO = /^0+/;
const NO_NUMBERS = /\D/g;

const formatInput = (input) =>
  input.value.replace(NO_NUMBERS, '').replace(LEAD_ZERO, '');
export default formatInput;
