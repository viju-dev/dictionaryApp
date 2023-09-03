import { combineReducers } from 'redux';
import {
  ADD_TO_HISTORY,
  FETCH_WORD_DETAILS_REQUEST,
  FETCH_WORD_DETAILS_SUCCESS,
  FETCH_WORD_DETAILS_FAILURE,
} from "../actions/actionTypes";

// History reducer
const historyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

// Word details reducer
const wordDetailsInitialState = {
  loading: false,
  data: null,
  error: null,
};

const wordDetailsReducer = (state = wordDetailsInitialState, action) => {
  switch (action.type) {
    case FETCH_WORD_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_WORD_DETAILS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_WORD_DETAILS_FAILURE:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

// Combine the reducers into a root reducer
const rootReducer = combineReducers({
  history: historyReducer,
  wordDetails: wordDetailsReducer,
});

export default rootReducer;
