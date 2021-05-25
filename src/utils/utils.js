import {filterValueToStringMap} from '../config';

export const getFiltersProp = (filterConfig, propName) => {
  return Object.entries(filterConfig)
    .reduce((acc, el) => Object.assign(acc, {[el[0]]: el[1][propName]}), {});
};

export const getFilterString = (filters) => {
  const filterValues = getFiltersProp(filters, 'value');
  const filtersString = Object.entries(filterValues).reduce((acc, el) => {
    const key = el[0];
    const value = el[1];

    acc = `${acc} ${filterValueToStringMap[key](value)}`;
    return acc.trim();
  }, '');

  return `url(#filter) ${filtersString}`;
};

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

export const getScaleCoefficient = (width, height) => {
  // Get rescale coefficient for canvas
  // width * height in pixels / 1 000 000. For 3000x4000 (12 Mp) = 12
  const size = width * height / Math.pow(10, 6);
  let rescale = 1;

  if (size >= 1 && size < 6) {
    rescale = 2;
  } else if (size >= 6 && size < 12) {
    rescale = 4;
  } else if (size >= 12 && size < 24) {
    rescale = 5;
  } else if (size >= 24) {
    rescale = 8;
  }

  return rescale;
};
