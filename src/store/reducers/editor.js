import {ActionType} from '../actions/types';

const initialState = {
  editorTab: null
};

const editor = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_EDITOR_TAB: {
      return {
        ...state,
        editorTab: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default editor;
