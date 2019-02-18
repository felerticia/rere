import {ADD,SUB} from '../consts'

export const add = (val) => {
    return {
      type: ADD,
      payload: val
    };
  };

export const del = (val) => {
    return {
        type: SUB,
        payload: val
    };
};