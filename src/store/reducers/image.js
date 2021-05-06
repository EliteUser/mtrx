import {ActionType} from '../actions/types';

const initialState = {
  imageFile: null,
  sourceImage: null,
  canvasRef: null
};

const image = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IMAGE_FILE: {
      return {
        ...state,
        imageFile: action.payload
      };
    }

    case ActionType.SET_IMAGE: {
      return {
        ...state,
        sourceImage: action.payload
      };
    }

    case ActionType.SET_CANVAS_REF: {
      return {
        ...state,
        canvasRef: action.payload
      };
    }

    case ActionType.REMOVE_CANVAS_REF: {
      return {
        ...state,
        canvasRef: null
      };
    }

    case ActionType.UPDATE_CANVAS: {
      const canvas = state.canvasRef.current;
      const sourceImage = state.sourceImage;

      if (canvas && sourceImage) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(sourceImage, 0, 0, sourceImage.naturalWidth, sourceImage.naturalHeight);
      }

      return state;
    }

    default: {
      return state;
    }
  }
};

export default image;
