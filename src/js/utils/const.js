const N = 1;
const PhysicalActivityRatio = {
  MIN_COEF: 1.2,
  LOW_COEF: 1.375,
  MEDIUM_COEF: 1.55,
  HIGH_COEF: 1.725,
  MAX_COEF: 1.9,
};
const PhysicalParametersRatio = {
  GENDER_MALE: 5,
  GENDER_FEMALE: 161,
  AGE: 5,
  HEIGHT: 6.25,
  WEIGHT: 10,
};
const LossGainWeight = {
  WEIGHT_LOSS: N - N * 0.15,
  WEIGHT_GAIN: N + N * 0.15,
};
console.log(PhysicalActivityRatio, PhysicalParametersRatio, LossGainWeight);
