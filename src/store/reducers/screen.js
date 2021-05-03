import {AppScreen} from '../../config';
import {ActionType} from '../actions/types';

const initialState = {
  appScreen: AppScreen.ENTRY
};

const screen = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_APP_SCREEN_ENTRY: {
      return {
        appScreen: AppScreen.ENTRY
      };
    }

    case ActionType.SET_APP_SCREEN_EDITOR: {
      return {
        appScreen: AppScreen.EDITOR
      };
    }

    default: {
      return state;
    }
  }
};

export default screen;
