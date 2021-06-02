import deepClone from 'lodash.clonedeep';

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

export const DEFAULT_PRIMITIVE = {
  id: '1',
  kernelX: 3,
  kernelY: 3,
  kernelMatrix: ['0', '0', '0\r', '0', '1', '0\r', '0', '0', '0'],
  divisor: 1,
  bias: 0
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

const defaultFilters = deepClone(filterConfig);
export const presetConfig = [
  {
    id: 'default',
    presetName: 'Default',
    presetDescription: 'Default Unit matrix. Does nothing with image.',
    primitives: [
      {
        id: '1',
        kernelX: 1,
        kernelY: 1,
        kernelMatrix: ['1'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'box_3',
    presetName: 'Box matrix',
    presetDescription: 'Convolution with a Box matrix filter has an effect equivalent to mean filtering (noise reduction).',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['1', '1', '1\r', '1', '1', '1\r', '1', '1', '1'],
        divisor: 9,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'box_10',
    presetName: 'Box-10',
    presetDescription: '10x10 Unit matrix for noise reduction.',
    primitives: [
      {
        id: '1',
        kernelX: 10,
        kernelY: 10,
        kernelMatrix: Array(100).fill('1'),
        divisor: 100,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'gauss_3',
    presetName: 'Gaussian Matrix 3',
    presetDescription: 'Apply Gaussian blur to an image. 3x3 Gaussian kernel matrix.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['0.00987648', '0.0796275', '0.00987648', '0.0796275', '0.641984', '0.0796275', '0.00987648', '0.0796275', '0.00987648'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'gauss_10',
    presetName: 'Gaussian Matrix 9',
    presetDescription: 'Apply Gaussian blur to an image. 9x9 Gaussian kernel matrix.',
    primitives: [
      {
        id: '1',
        kernelX: 9,
        kernelY: 9,
        kernelMatrix: ['0.000709454', '0.00167174', '0.00321706', '0.0048888', '0.00566146', '0.0048888', '0.00321706', '0.00167174', '0.000709454', '.00167174', '0.00393924', '0.0075806', '0.0115198', '0.0133405', '0.0115198', '0.0075806', '0.00393924', '0.00167174', '0.00321706', '0.0075806', '0.014588', '0.0221686', '0.0256723', '0.0221686', '0.014588', '0.0075806', '0.00321706', '0.0048888', '0.0115198', '0.0221686', '0.0336884', '0.0390128', '0.0336884', '0.0221686', '0.0115198', '0.0048888', '0.00566146', '0.0133405', '0.0256723', '0.0390128', '0.0451786', '0.0390128', '0.0256723', '0.0133405', '0.00566146', '0.0048888', '0.0115198', '0.0221686', '0.0336884', '0.0390128', '0.0336884', '0.0221686', '0.0115198', '0.0048888', '0.00321706', '0.0075806', '0.014588', '0.0221686', '0.0256723', '0.0221686', '0.014588', '0.0075806', '0.00321706', '0.00167174', '0.00393924', '0.0075806', '0.0115198', '0.0133405', '0.0115198', '0.0075806', '0.00393924', '0.00167174', '0.000709454', '0.00167174', '0.00321706', '0.0048888', '0.00566146', '0.0048888', '0.00321706', '0.00167174', '0.000709454'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'sobel_v',
    presetName: 'Sobel-V',
    presetDescription: 'When applied on an image this mask will highlight the vertical edges.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['-1', '0', '1\r', '-2', '0', '2\r', '-1', '0', '1'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'sobel_h',
    presetName: 'Sobel-H',
    presetDescription: 'When applied on an image this mask will highlight edges in horizontal direction.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['-1', '-2', '-1\r', '0', '0', '0\r', '1', '2', '1'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'prewitt',
    presetName: 'Prewitt',
    presetDescription: 'Prewitt 3x3 kernel.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['1', '0', '-1\r', '1', '0', '-1\r', '1', '0', '-1'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'compass',
    presetName: 'Compass',
    presetDescription: 'This is the Prewitt Compass kernel which supposedly a stronger directional sense than Sobel.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['1', '1', '-1\r', '1', '-2', '-1\r', '1', '1', '-1'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'kirsch',
    presetName: 'Kirsch',
    presetDescription: 'Kirsch strong direction sensing edge detector.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['5', '-3', '-3\r', '5', '0', '-3\r', '5', '-3', '-3'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'sharpen_1',
    presetName: 'Sharpen',
    presetDescription: 'Sharpens image when applied.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['0', '-1', '0\r', '-1', '5', '-1\r', '0', '-1', '0'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'sharpen_2',
    presetName: 'Sharpen-2',
    presetDescription: 'Sharpens image when applied.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['-1', '-1', '-1\r', '-1', '9', '-1\r', '-1', '-1', '-1'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'laplacian_1',
    presetName: 'Laplacian 1',
    presetDescription: 'This discrete Laplacian kernel is used for edge detection. Center 4.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['0', '-1', '0\r', '-1', '4', '-1\r', '0', '-1', '0'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'laplacian_2',
    presetName: 'Laplacian 2',
    presetDescription: 'This discrete Laplacian kernel is used for edge detection.  Center 8.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['-1', '-1', '-1\r', '-1', '8', '-1\r', '-1', '-1', '-1'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'laplacian_3',
    presetName: 'Laplacian 3',
    presetDescription: 'This discrete Laplacian kernel is used for edge detection. 3x3 Laplacian, with center 4, edge -2, corner 1.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['1', '-2', '1\r', '-2', '4', '-2\r', '1', '-2', '1'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'laplacian_4',
    presetName: 'Laplacian 4',
    presetDescription: 'This discrete Laplacian kernel is used for edge detection. 3x3 Laplacian, with center 4, edge 1, corner -2.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['-2', '1', '-2\r', '1', '4', '1\r', '-2', '1', '-2'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'laplacian_5',
    presetName: 'Laplacian 5',
    presetDescription: 'This discrete Laplacian kernel is used for edge detection. 5x5 Laplacian.',
    primitives: [
      {
        id: '1',
        kernelX: 5,
        kernelY: 5,
        kernelMatrix: ['-4', '-1', '0', '-1', '-4', '-1', '2', '3', '2', '-1', '0', '3', '4', '3', '0', '-1', '2', '3', '2', '-1', '-4', '-1', '0', '-1', '-4'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'laplacian_6',
    presetName: 'Laplacian 9',
    presetDescription: 'This discrete Laplacian kernel is used for edge detection. 9x9 Laplacian.',
    primitives: [
      {
        id: '1',
        kernelX: 9,
        kernelY: 9,
        kernelMatrix: ['0', '-1', '-1', '-2', '-2', '-2', '-1', '-1', '0', '-1', '-2', '-4', '-5', '-5', '-5', '-4', '-2', '-1', '-1', '-4', '-5', '-3', '0', '-3', '-5', '-4', '-1', '-2', '-5', '-3', '12', '24', '12', '-3', '-5', '-2', '-2', '-5', '0', '24', '40', '24', '0', '-5', '-2', '-2', '-5', '-3', '12', '24', '12', '-3', '-5', '-2', '-1', '-4', '-5', '-3', '0', '-3', '-5', '-4', '-1', '-1', '-2', '-4', '-5', '-5', '-5', '-4', '-2', '-1', '0', '-1', '-1', '-2', '-2', '-2', '-1', '-1', '0'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  },
  {
    id: 'emboss',
    presetName: 'Emboss',
    presetDescription: 'Apply emboss effect to the image.',
    primitives: [
      {
        id: '1',
        kernelX: 3,
        kernelY: 3,
        kernelMatrix: ['-2', '-1', '0\r', '-1', '1', '1\r', '0', '1', '2'],
        divisor: 1,
        bias: 0,
      }
    ],
    filters: defaultFilters
  }
];
