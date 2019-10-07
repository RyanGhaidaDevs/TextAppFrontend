import { ADD_TEXT } from '../types/text';

export const addText = (text) => {
  return dispatch => {
    dispatch({
      type: ADD_TEXT,
      payload: {
        text
      }
    })
  }
}