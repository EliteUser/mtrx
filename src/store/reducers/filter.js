import {compose} from 'redux';
import deepClone from 'lodash.clonedeep';

import {ActionType} from '../actions/types';
import {DEFAULT_PRIMITIVE, MIN_KERNEL_SIZE, MAX_KERNEL_SIZE} from '../../config';

import {
  formatPositiveInteger,
  rangeValue,
  replaceDecimals,
  getFormattedMatrix
} from '../../utils/utils';

const initialState = {
  filterString: 'url(#filter)',
  selectedPrimitive: '1',
  defaultPrimitives: [
    {...DEFAULT_PRIMITIVE}
  ],
  primitives: [
    {...DEFAULT_PRIMITIVE}
  ]
};

const getFilterString = (state) => {
  // TODO filters
  return `url(#filter)`;
};

const primitiveActionToPropMap = {
  FILTER_PRIMITIVE_KERNEL_X_CHANGED: 'kernelX',
  FILTER_PRIMITIVE_KERNEL_Y_CHANGED: 'kernelY',
  FILTER_PRIMITIVE_KERNEL_MATRIX_CHANGED: 'kernelMatrix',
  FILTER_PRIMITIVE_DIVISOR_CHANGED: 'divisor',
  FILTER_PRIMITIVE_BIAS_CHANGED: 'bias'
};

const propFormatting = {
  kernelX: compose(formatPositiveInteger, rangeValue(MIN_KERNEL_SIZE, MAX_KERNEL_SIZE)),
  kernelY: compose(formatPositiveInteger, rangeValue(MIN_KERNEL_SIZE, MAX_KERNEL_SIZE)),
  kernelMatrix: (v) => v,
  divisor: replaceDecimals,
  bias: replaceDecimals,
};

const updatePrimitive = (primitives, {
  primitiveId,
  prop,
  value
}) => {
  const primitiveIndex = primitives.findIndex(({id}) => primitiveId === id);
  const primitive = primitives[primitiveIndex];

  const updatedPrimitive = {
    ...primitive,
    [prop]: propFormatting[prop](value)
  };

  // If kernelX or kernelY changed, update matrix (fill with 1s or truncate)
  const xProp = primitiveActionToPropMap.FILTER_PRIMITIVE_KERNEL_X_CHANGED;
  const yProp = primitiveActionToPropMap.FILTER_PRIMITIVE_KERNEL_Y_CHANGED;

  if (prop === xProp || prop === yProp) {
    const {
      kernelX,
      kernelY,
      kernelMatrix
    } = updatedPrimitive;

    if (!kernelX || !kernelY) {
      updatedPrimitive.kernelMatrix = '1';
    } else {
      const matrixArray = kernelMatrix.trimRight().split(/\r|\s/g);
      const dimensionSize = kernelX * kernelY;

      if (matrixArray.length > dimensionSize) {
        updatedPrimitive.kernelMatrix = getFormattedMatrix(matrixArray.slice(0, dimensionSize).join(' '), kernelX);
      } else if (matrixArray.length < dimensionSize) {
        const newKernel = [...matrixArray, ...Array(dimensionSize - matrixArray.length).fill('1')];
        updatedPrimitive.kernelMatrix = getFormattedMatrix(newKernel.join(' '), kernelX);
      }
    }
  }

  return [
    ...primitives.slice(0, primitiveIndex),
    updatedPrimitive,
    ...primitives.slice(primitiveIndex + 1)
  ];
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateKernelElement = (primitives, {
  primitiveId,
  value,
  index
}) => {
  const primitiveIndex = primitives.findIndex(({id}) => primitiveId === id);
  const primitive = primitives[primitiveIndex];

  const matrixArray = primitive.kernelMatrix.trimRight().split(/\r|\s/g);
  matrixArray[index] = value;

  const updatedPrimitive = {
    ...primitive,
    // kernelMatrix: getFormattedMatrix(matrixArray.join(' '), primitive.kernelX).trimRight()
    kernelMatrix: matrixArray.join(' ').trimRight()
  };

  return [
    ...primitives.slice(0, primitiveIndex),
    updatedPrimitive,
    ...primitives.slice(primitiveIndex + 1)
  ];
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const filter = (state = initialState, action) => {
  if (primitiveActionToPropMap[action.type]) {
    const updatedPrimitives = updatePrimitive(state.primitives, {
      primitiveId: action.payload.id,
      prop: primitiveActionToPropMap[action.type],
      value: action.payload.value
    });
    return {
      ...state,
      primitives: updatedPrimitives
    };
  } else {

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    switch (action.type) {
      case ActionType.FILTER_PRIMITIVE_KERNEL_MATRIX_ELEMENT_CHANGED: {
        const {
          id,
          value,
          index
        } = action.payload;
        const updatedPrimitives = updateKernelElement(state.primitives, {
          primitiveId: id,
          value,
          index
        });

        return {
          ...state,
          primitives: updatedPrimitives
        };
      }

      //////////////////////////////////////////////////////////////////////////////////////////////////////////

      case ActionType.FILTER_MATRIX_FORMAT: {
        const {
          value,
          kernelX
        } = action.payload;
        const formattedMatrix = getFormattedMatrix(value, kernelX);

        const updatedPrimitives = updatePrimitive(state.primitives, {
          primitiveId: action.payload.id,
          prop: primitiveActionToPropMap.FILTER_PRIMITIVE_KERNEL_MATRIX_CHANGED,
          value: formattedMatrix
        });

        return {
          ...state,
          primitives: updatedPrimitives
        };
      }

      //////////////////////////////////////////////////////////////////////////////////////////////////////////

      case ActionType.FILTER_MATRIX_RESET: {
        const {id: primitiveId} = action.payload;
        const {
          primitives,
          defaultPrimitives
        } = state;
        const primitiveIndex = primitives.findIndex(({id}) => primitiveId === id);
        const defaultPrimitive = defaultPrimitives.find(({id}) => primitiveId === id);

        return {
          ...state,
          primitives: [
            ...primitives.slice(0, primitiveIndex),
            {...deepClone(defaultPrimitive)},
            ...primitives.slice(primitiveIndex + 1)
          ]
        };
      }

      //////////////////////////////////////////////////////////////////////////////////////////////////////////

      case ActionType.TOGGLE_FILTER: {
        const filter = state.filterString.length ? '' : getFilterString(state);

        return {
          ...state,
          filterString: filter
        };
      }

      default: {
        return state;
      }
    }
  }
};

export default filter;
