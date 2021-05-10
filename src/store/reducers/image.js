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

    case ActionType.SAVE_IMAGE: {
      const canvas = state.canvasRef.current;

      const download = (href, name) => {
        const link = document.createElement('a');
        link.download = name;
        link.href = href;
        link.click();
        link.remove();
      };

      canvas.toBlob((blob) => {
        const URLObj = window.URL || window.webkitURL;
        const jpeg = URLObj.createObjectURL(blob);
        const name = `mtrx_edited_${+new Date()}.jpeg`;

        download(jpeg, name);
      }, 'image/jpeg', 1);

      return state;
    }

    default: {
      return state;
    }
  }
};

export default image;
