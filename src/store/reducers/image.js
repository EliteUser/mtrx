import {ActionType} from '../actions/types';

const initialState = {
  imageFile: null
};

const image = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IMAGE: {
      return {
        ...state,
        imageFile: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default image;
