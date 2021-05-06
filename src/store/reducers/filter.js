import {ActionType} from '../actions/types';

const initialState = {
  selectedPrimitive: '1',
  primitives: [
    {
      id: '1',
      kernelX: 3,
      kernelY: 3,
      kernelMatrix: '1 1 1 1 1 1 1 1 1',
      divisor: 9,
      bias: 0
    }
  ]
};

const primitiveActionToPropMap = {
  FILTER_PRIMITIVE_KERNEL_X_CHANGED: 'kernelX',
  FILTER_PRIMITIVE_KERNEL_Y_CHANGED: 'kernelY',
  FILTER_PRIMITIVE_KERNEL_MATRIX_CHANGED: 'kernelMatrix',
  FILTER_PRIMITIVE_DIVISOR_CHANGED: 'divisor',
  FILTER_PRIMITIVE_BIAS_CHANGED: 'bias'
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
    [prop]: prop === 'kernelMatrix' ? value : parseFloat(value)
  };

  return [
    ...primitives.slice(0, primitiveIndex),
    updatedPrimitive,
    ...primitives.slice(primitiveIndex + 1)
  ];
};

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
    switch (action.type) {
      case 1: {
        return {};
      }

      default: {
        return state;
      }
    }
  }
};

export default filter;
