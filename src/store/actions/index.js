import {ActionType} from './types';
import {EditorTab} from '../../config';

export const setAppScreenEntry = () => {
  return {
    type: ActionType.SET_APP_SCREEN_ENTRY
  };
};

export const setAppScreenEditor = () => {
  return {
    type: ActionType.SET_APP_SCREEN_EDITOR
  };
};

export const setEditorTab = (tab) => {
  return {
    type: ActionType.SET_EDITOR_TAB,
    payload: tab
  };
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const setImageFile = (imageFile) => {
  return {
    type: ActionType.SET_IMAGE_FILE,
    payload: imageFile
  };
};

export const setImage = (image) => {
  return {
    type: ActionType.SET_IMAGE,
    payload: image
  };
};

export const setImageFileAndGoToEditor = (image) => () => (dispatch) => {
  dispatch(setImageFile(image));
  dispatch(setEditorTab(EditorTab.MTRX));
  dispatch(setAppScreenEditor());
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const setKernelX = (value, primitiveId) => {
  return {
    type: ActionType.FILTER_PRIMITIVE_KERNEL_X_CHANGED,
    payload: {
      value,
      id: primitiveId
    }
  };
};

export const setKernelY = (value, primitiveId) => {
  return {
    type: ActionType.FILTER_PRIMITIVE_KERNEL_Y_CHANGED,
    payload: {
      value,
      id: primitiveId
    }
  };
};

export const setKernelMatrix = (matrixValue, primitiveId) => {
  return {
    type: ActionType.FILTER_PRIMITIVE_KERNEL_MATRIX_CHANGED,
    payload: {
      value: matrixValue,
      id: primitiveId
    }
  };
};

export const setKernelMatrixElement = (value, primitiveId, elementPositionIndex) => {
  return {
    type: ActionType.FILTER_PRIMITIVE_KERNEL_MATRIX_ELEMENT_CHANGED,
    payload: {
      value,
      id: primitiveId,
      index: elementPositionIndex
    }
  };
};

export const setDivisor = (value, primitiveId) => {
  return {
    type: ActionType.FILTER_PRIMITIVE_DIVISOR_CHANGED,
    payload: {
      value: value,
      id: primitiveId
    }
  };
};

export const setBias = (value, primitiveId) => {
  return {
    type: ActionType.FILTER_PRIMITIVE_BIAS_CHANGED,
    payload: {
      value: value,
      id: primitiveId
    }
  };
};

export const formatMatrix = (kernelMatrix, primitiveId) => {
  return {
    type: ActionType.FILTER_MATRIX_FORMAT,
    payload: {
      value: kernelMatrix,
      id: primitiveId
    }
  };
};

export const resetMatrix = (primitiveId) => {
  return {
    type: ActionType.FILTER_MATRIX_RESET,
    payload: {
      id: primitiveId
    }
  };
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const saveImage = (filter) => {
  return {
    type: ActionType.SAVE_IMAGE,
    payload: {
      filter
    }
  };
};

export const toggleFilter = () => {
  return {
    type: ActionType.TOGGLE_FILTER
  };
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const setFilter = (value, filterName) => {
  return {
    type: ActionType.FILTER_CHANGED,
    payload: {
      value: value,
      name: filterName
    }
  };
};

export const resetFilter = (filterName) => {
  return {
    type: ActionType.FILTER_RESET,
    payload: {
      name: filterName
    }
  };
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const selectPreset = (presetId) => {
  return {
    type: ActionType.PRESET_SELECT,
    payload: {
      id: presetId
    }
  };
};

