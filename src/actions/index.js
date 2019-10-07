const ROOT_URL = 'http://localhost:3000';

export const ADD_TEXT = 'ADD_TEXT';

export function addText(text) {
  return {type: ADD_TEXT, text}
}