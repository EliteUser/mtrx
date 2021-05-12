export const MIN_KERNEL_SIZE = 1;
export const MAX_KERNEL_SIZE = 10;

export const AppScreen = {
  ENTRY: 'entry',
  EDITOR: 'editor'
};

export const EditorTab = {
  PRESETS: 'presets',
  MTRX: 'mtrx',
  FILTERS: 'filters'
};

export const DEFAULT_PRIMITIVE = {
  id: '1',
  kernelX: 3,
  kernelY: 3,
  kernelMatrix: '1 1 1\r1 1 1\r1 1 1',
  divisor: 9,
  bias: 0
};

export const filterConfig = {
  'contrast': {
    defaultValue: 1,
    min: 0,
    max: 2,
    step: 0.05,
    twoSided: true
  },
  'opacity': {
    defaultValue: 1,
    min: 0,
    max: 1,
    step: 0.01,
    twoSided: false
  },
  'brightness': {
    defaultValue: 1,
    min: 0,
    max: 2,
    step: 0.01,
    twoSided: true
  }
};

export const defaultFilterValues = Object.entries(filterConfig)
  .reduce((acc, el) => Object.assign(acc, {[el[0]]: el[1].defaultValue}), {});
