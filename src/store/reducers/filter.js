import {compose} from 'redux';
import deepClone from 'lodash.clonedeep';

import {ActionType} from '../actions/types';
import {
  DEFAULT_PRIMITIVE,
  MAX_KERNEL_SIZE,
  MIN_KERNEL_SIZE,
  filterConfig,
  presetConfig
} from '../../config';

import {
  getFilterString,
  formatPositiveInteger,
  rangeValue,
  replaceDecimals
} from '../../utils/utils';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const initialState = {
  filterString: getFilterString(filterConfig),
  filterApplied: true,
  selectedPrimitive: '1',
  selectedPreset: null,
  defaultPrimitives: [
    {...DEFAULT_PRIMITIVE}
  ],
  primitives: [
    {...DEFAULT_PRIMITIVE}
  ],
  filters: filterConfig,
  presets: presetConfig
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
  kernelMatrix: (value) => value instanceof Array ? value : value.split(/\r|\s/g),
  divisor: replaceDecimals,
  bias: replaceDecimals,
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
      updatedPrimitive.kernelMatrix = ['1'];
    } else {
      const dimensionSize = kernelX * kernelY;

      if (kernelMatrix.length > dimensionSize) {
        updatedPrimitive.kernelMatrix = kernelMatrix.slice(0, dimensionSize);
      } else if (kernelMatrix.length < dimensionSize) {
        updatedPrimitive.kernelMatrix = [...kernelMatrix, ...Array(dimensionSize - kernelMatrix.length).fill('1')];
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

  const updatedMatrix = [...primitive.kernelMatrix];
  updatedMatrix[index] = replaceDecimals(value);

  const updatedPrimitive = {
    ...primitive,
    kernelMatrix: updatedMatrix
  };

  return [
    ...primitives.slice(0, primitiveIndex),
    updatedPrimitive,
    ...primitives.slice(primitiveIndex + 1)
  ];
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateFilters = (filters, {
  value,
  filterName
}) => {
  const newFilters = deepClone(filters);
  newFilters[filterName].value = value;

  return newFilters;
};

const resetFilter = (filters, filterName) => {
  const newFilters = deepClone(filters);
  newFilters[filterName].value = filters[filterName].defaultValue;

  return newFilters;
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
        const formattedMatrix = action.payload.value.reduce((acc, el) => {
          return el ? [...acc, el] : [...acc];
        }, []);

        const updatedPrimitives = updatePrimitive(state.primitives, {
          primitiveId: action.payload.id,
          prop: primitiveActionToPropMap.FILTER_PRIMITIVE_KERNEL_MATRIX_CHANGED,
          value: formattedMatrix,
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
        // const filter = state.filterString.length ? '' : getFilterString(state.filters);
        const filterApplied = state.filterApplied;

        return {
          ...state,
          filterApplied: !filterApplied
        };
      }

      case ActionType.FILTER_CHANGED: {
        const {filters} = state;
        const {
          value,
          name
        } = action.payload;
        const updatedFilters = updateFilters(filters, {
          value,
          filterName: name
        });

        return {
          ...state,
          filterString: getFilterString(updatedFilters),
          filters: updatedFilters
        };
      }

      case ActionType.FILTER_RESET: {
        const {filters} = state;
        const updatedFilters = resetFilter(filters, action.payload.name);

        return {
          ...state,
          filterString: getFilterString(updatedFilters),
          filters: updatedFilters
        };
      }

      case ActionType.PRESET_SELECT: {
        const selectedPresetId = action.payload.id;

        if (state.selectedPreset === selectedPresetId) {
          return deepClone(initialState);
        } else {
          const preset = presetConfig.find(({id}) => id === selectedPresetId);
          const presetPrimitives = deepClone(preset.primitives);
          const presetFilters = deepClone(preset.filters);

          return {
            ...state,
            selectedPreset: selectedPresetId,
            primitives: presetPrimitives,
            defaultPrimitives: presetPrimitives,
            filterString: getFilterString(presetFilters),
            filters: presetFilters,
            selectedPrimitive: presetPrimitives[0].id
          };
        }
      }

      default: {
        return state;
      }
    }
  }
};

export default filter;
