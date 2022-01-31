import { ADD_CONTACT } from "./constants";

const initialState = {
  contact: null,
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        contact: action.payload,
      };
    default:
      return state;
  }
}
