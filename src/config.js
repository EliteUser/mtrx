import deepClone from 'lodash.clonedeep';
import {getFormattedMatrixString} from './utils/utils';

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

export const presetConfig = [
  {
    id: 'default',
    presetName: 'Default',
    presetDescription: 'Default Unit matrix. Does nothing with image',
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
    filters: deepClone(filterConfig)
  },
  {
    id: 'box_3',
    presetName: 'Box matrix',
    presetDescription: 'Convolution with a Box matrix filter has an effect equivalent to mean filtering (noise reduction)',
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
    filters: deepClone(filterConfig)
  },
  {
    id: 'box_10',
    presetName: 'Box-10',
    presetDescription: '10x10 Unit matrix for noise reduction',
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
    filters: deepClone(filterConfig)
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
    filters: deepClone(filterConfig)
  },
  {
    id: 'sobel_h',
    presetName: 'Sobel-H',
    presetDescription: 'When applied on an image this mask will highlight edges in horizontal direction',
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
    filters: deepClone(filterConfig)
  },
  {
    id: 'sharpen',
    presetName: 'Sharpen',
    presetDescription: 'Sharpens image when applied',
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
    filters: deepClone(filterConfig)
  }
];
