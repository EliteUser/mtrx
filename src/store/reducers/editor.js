import {EditorTab} from '../../config';
import {ActionType} from '../actions/types';

const initialState = {
  editorTab: EditorTab.MTRX
};

const editor = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_EDITOR_TAB: {
      return {
        editorTab: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default editor;
