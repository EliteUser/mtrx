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
  kernelMatrix: ['1', '1', '1\r', '1', '1', '1\r', '1', '1', '1'],
  divisor: 9,
  bias: 0
};

// Filter Docs - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
export const filterConfig = {
  'blur': {
    defaultValue: 0,
    value: 0,
    min: 0,
    max: 15,
    step: 0.25,
    twoSided: false
  },
  'brightness': {
    defaultValue: 1,
    value: 1,
    min: 0,
    max: 2,
    step: 0.01,
    twoSided: true
  },
  'contrast': {
    defaultValue: 1,
    value: 1,
    min: 0,
    max: 2,
    step: 0.01,
    twoSided: true
  },
  'grayscale': {
    defaultValue: 0,
    value: 0,
    min: 0,
    max: 1,
    step: 0.01,
    twoSided: false
  },
  'hue-rotate': {
    defaultValue: 0,
    value: 0,
    min: 0,
    max: 360,
    step: 1,
    twoSided: false
  },
  'invert': {
    defaultValue: 0,
    value: 0,
    min: 0,
    max: 1,
    step: 0.01,
    twoSided: false
  },
  'opacity': {
    defaultValue: 1,
    value: 1,
    min: 0,
    max: 1,
    step: 0.01,
    twoSided: false
  },
  'saturate': {
    defaultValue: 1,
    value: 1,
    min: 0,
    max: 2,
    step: 0.01,
    twoSided: false
  },
  'sepia': {
    defaultValue: 0,
    value: 0,
    min: 0,
    max: 2,
    step: 0.01,
    twoSided: false
  },
};

export const filterValueToStringMap = {
  'blur': (value) => `blur(${value}px)`,
  'brightness': (value) => `brightness(${value})`,
  'contrast': (value) => `contrast(${value})`,
  'grayscale': (value) => `grayscale(${value})`,
  'hue-rotate': (value) => `hue-rotate(${value}deg)`,
  'invert': (value) => `invert(${value})`,
  'opacity': (value) => `opacity(${value})`,
  'saturate': (value) => `saturate(${value})`,
  'sepia': (value) => `sepia(${value})`,
};
