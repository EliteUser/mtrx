import {ActionType} from '../actions/types';

const initialState = {
  imageFile: null,
  sourceImage: null,
  isRendering: true,
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

    case ActionType.SET_RENDERING: {
      return {
        ...state,
        isRendering: action.payload.state
      };
    }

    case ActionType.SAVE_IMAGE: {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', {alpha: false});

      const download = (href, name) => {
        const link = document.createElement('a');
        link.download = name;
        link.href = href;
        link.click();
        link.remove();
        canvas.remove();
      };

      const sourceImage = state.sourceImage;

      canvas.width = sourceImage.width;
      canvas.height = sourceImage.height;

      ctx.filter = action.payload.filter;
      ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);

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
