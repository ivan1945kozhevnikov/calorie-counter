const PhysicalActivity = {
  MIN_COEF: 1.2,
  LOW_COEF: 1.375,
  MEDIUM_COEF: 1.55,
  HIGH_COEF: 1.725,
  MAX_COEF: 1.9,
};

const PERCENTAGE = 0.15;

const countResult = (age, weight, height, gender) => {
  const PhysicalOptions = {
    GENDER: gender.value,
    AGE: age.value,
    HEIGHT: height.value,
    WEIGHT: weight.value,
  };
  console.log(PERCENTAGE, PhysicalActivity, PhysicalOptions);
};

export default countResult;
