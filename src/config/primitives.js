export const primitiveAttributes = {
  feConvolveMatrix: {
    order: '1 1',
    kernelMatrix: '1',
    divisor: 1,
    bias: 0,

    x: '0%',
    y: '0%',
    targetX: '0',
    targetY: '0',

    edgeMode: 'duplicate',
    preserveAlpha: 'true',
  },

  feColorMatrix: {
    type: 'matrix',
    values: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0',

    x: '0%',
    y: '0%',
    targetX: '0',
    targetY: '0',
  }
};
