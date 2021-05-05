import {ActionType} from './types';

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

export const setImage = (image) => {
  return {
    type: ActionType.SET_IMAGE,
    payload: image
  };
};

export const setImageAndGoToEditor = (image) => () => (dispatch) => {
  dispatch(setImage(image));
  dispatch(setAppScreenEditor());
};
