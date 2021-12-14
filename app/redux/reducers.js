import { EDIT_WEEK, EDIT_WEIGHT } from "./actions";

const initialState = { squat: 440, bench: 345, deadlift: 520, week: 1 };

function weightsReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_WEIGHT:
      const exercise = action.payload.exercise;
      const weight = action.payload.weight;
      return { ...state, [exercise]: weight };
    case EDIT_WEEK:
      return { ...state, week: action.week };
    default:
      return state;
  }
}

export default weightsReducer;
