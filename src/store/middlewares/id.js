import {ActionType} from '../actions/types';
import {nanoid} from 'nanoid';

export const idMiddleware = () => (next) => (action) => {
  if (action.type === ActionType.PRIMITIVE_ADDED) {
    action.payload.id = nanoid(10);
  }

  return next(action);
};
