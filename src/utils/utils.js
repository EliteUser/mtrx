export const toPercentageScale = (min, max, twoSided, value) => {
  if (twoSided) {
    return -100 + Math.floor(200 / (max - min) * (value));
  } else {
    return Math.floor(100 / (max - min) * value);
  }
};

export const getFormattedMatrixString = (kernelMatrix, kernelX) => {
  const matrixArray = kernelMatrix.map((el) => el.trim());
  let caretIndex = kernelX - 1;

  for (let index = 0; index < matrixArray.length; index++) {
    const element = matrixArray[index];

    if (index === matrixArray.length - 1) {
      matrixArray[index] = `${element}`;
    } else if (index === caretIndex) {
      caretIndex += kernelX;
      matrixArray[index] = `${element}\r`;
    } else {
      matrixArray[index] = `${element} `;
    }
  }

  return matrixArray.join('');
};

export const formatPositiveInteger = (value) => {
  const processedValue = Math.abs(parseInt(value));
  return isNaN(processedValue) ? '' : processedValue;
};

export const rangeValue = (min, max) => {
  return (value) => {
    const numValue = parseFloat(value);
    if (numValue <= min) {
      return min;
    } else if (numValue >= max) {
      return max;
    } else {
      return value;
    }
  };
};

export const replaceDecimals = (value) => {
  return value
    .replace(/,/gi, '.')
    .replace(/\.+/g, '.')
    .replace(/^\./, '0.')
    .replace(/^-\./, '-0.');
};

