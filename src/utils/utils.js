export const toPercentageScale = (min, max, twoSided, value) => {
  if (twoSided) {
    return -100 + Math.floor(200 / (max - min) * (value));
  } else {
    return Math.floor(100 / (max - min) * value);
  }
};
