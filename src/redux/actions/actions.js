import {
  ADD_TO_HISTORY,
  FETCH_WORD_DETAILS_REQUEST,
  FETCH_WORD_DETAILS_SUCCESS,
  FETCH_WORD_DETAILS_FAILURE,
} from './actionTypes';

// Add a word to the history
export const addToHistory = (word) => {
  return {
    type: ADD_TO_HISTORY,
    payload: word,
  };
};

// Fetch word details from the API
export const fetchWordDetails = (word) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_WORD_DETAILS_REQUEST });

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();

      dispatch({ type: FETCH_WORD_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_WORD_DETAILS_FAILURE, payload: error.message });
    }
  };
};
