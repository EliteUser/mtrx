export const ActionType = {
  SET_APP_SCREEN_ENTRY: 'SET_APP_SCREEN_ENTRY',
  SET_APP_SCREEN_EDITOR: 'SET_APP_SCREEN_EDITOR',
  SET_EDITOR_TAB: 'SET_EDITOR_TAB',

  SET_IMAGE_FILE: 'SET_IMAGE_FILE',
  SET_IMAGE: 'SET_IMAGE',

  FILTER_PRIMITIVE_KERNEL_X_CHANGED: 'FILTER_PRIMITIVE_KERNEL_X_CHANGED',
  FILTER_PRIMITIVE_KERNEL_Y_CHANGED: 'FILTER_PRIMITIVE_KERNEL_Y_CHANGED',
  FILTER_PRIMITIVE_KERNEL_MATRIX_CHANGED: 'FILTER_PRIMITIVE_KERNEL_MATRIX_CHANGED',
  FILTER_PRIMITIVE_DIVISOR_CHANGED: 'FILTER_PRIMITIVE_DIVISOR_CHANGED',
  FILTER_PRIMITIVE_BIAS_CHANGED: 'FILTER_PRIMITIVE_BIAS_CHANGED',
  FILTER_MATRIX_FORMAT: 'FILTER_MATRIX_FORMAT',
  FILTER_MATRIX_RESET: 'FILTER_MATRIX_RESET',

  FILTER_PRIMITIVE_KERNEL_MATRIX_ELEMENT_CHANGED: 'FILTER_PRIMITIVE_KERNEL_MATRIX_ELEMENT_CHANGED',
  TOGGLE_FILTER: 'TOGGLE_FILTER',

  FILTER_CHANGED: 'FILTER_CHANGED',
  FILTER_RESET: 'FILTER_RESET',

  PRESET_SELECT: 'PRESET_SELECT',

  SET_CANVAS_REF: 'SET_CANVAS_REF',
  REMOVE_CANVAS_REF: 'SET_CANVAS_REF',
  UPDATE_CANVAS: 'UPDATE_CANVAS',
  SAVE_IMAGE: 'SAVE_IMAGE',
};

export const actionsToUpdateCanvas = [
  ActionType.FILTER_PRIMITIVE_KERNEL_X_CHANGED,
  ActionType.FILTER_PRIMITIVE_KERNEL_Y_CHANGED,
  ActionType.FILTER_PRIMITIVE_KERNEL_MATRIX_CHANGED,
  ActionType.FILTER_PRIMITIVE_DIVISOR_CHANGED,
  ActionType.FILTER_PRIMITIVE_BIAS_CHANGED,
];
