import { ADD_TEXT } from '../types/text.js';

const initialState = {
  text: ""
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TEXT :
      return {...state, text: action.payload.text}
  default :
    return state
  }
}