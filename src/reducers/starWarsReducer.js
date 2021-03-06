import { SUCCESSFUL, LOADING, ERROR} from "../actions/index";
const initialState = {
  characters: [],
  loading: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    case SUCCESSFUL:
    return Object.assign({}, state, {
      characters: action.payload,
      error: "",
      loading: false
    });

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
