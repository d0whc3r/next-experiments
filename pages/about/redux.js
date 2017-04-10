// Actions
const SAMPLE_ACTION = 'my-app/sample/ACTION';

// Action creator
export function sample() {
  return { type: SAMPLE_ACTION };
}

// Reducer
export default (state = {}, action = {}) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return { ts: Date.now() };
      break;
    default:
      return state;
  }
}
