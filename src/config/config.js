/* Screen sizes */

export const SCREEN_SM = 320;
export const SCREEN_TB = 767;
export const SCREEN_DT = 1199;

/* Matrix sizes */

export const MIN_KERNEL_SIZE = 1;
export const MAX_KERNEL_SIZE = 10;

/* App screen tabs */

export const AppScreen = {
  ENTRY: 'entry',
  EDITOR: 'editor'
};

/* Editor screen tabs */

export const EditorTab = {
  PRESETS: 'presets',
  MTRX: 'mtrx',
  FILTERS: 'filters'
};

/* SVG Filter primitive types */

export const PrimitiveType = {
  convolveMatrix: 'feConvolveMatrix',
  colorMatrix: 'feColorMatrix'
};

export const DEFAULT_CONVOLVE_MATRIX_PRIMITIVE = {
  id: '1',
  visible: true,
  primitiveType: PrimitiveType.convolveMatrix,
  kernelX: 3,
  kernelY: 3,
  kernelMatrix: ['0', '0', '0\r', '0', '1', '0\r', '0', '0', '0'],
  divisor: 1,
  bias: 0
};

export const DEFAULT_COLOR_MATRIX_PRIMITIVE = {
  id: '2',
  visible: true,
  primitiveType: PrimitiveType.colorMatrix,
  kernelX: 5,
  kernelY: 4,
  kernelMatrix: ['1', '0', '0', '0', '0\r', '0', '1', '0', '0', '0\r', '0', '0', '1', '0', '0\r', '0', '0', '0', '1', '0'],
};

// Filter Docs - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
export const filterConfig = {
  'blur': {
    defaultValue: 0,
    value: 0,
    min: 0,
    max: 15,
    step: 0.15,
    twoSided: false
  },
  'brightness': {
    defaultValue: 1,
    value: 1,
    min: 0,
    max: 2,
    step: 0.02,
    twoSided: true
  },
  'contrast': {
    defaultValue: 1,
    value: 1,
    min: 0,
    max: 2,
    step: 0.02,
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
    step: 2,
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
    step: 0.02,
    twoSided: false
  },
  'sepia': {
    defaultValue: 0,
    value: 0,
    min: 0,
    max: 2,
    step: 0.02,
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
