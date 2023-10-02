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
      console.log(!response.status);

      console.log(data);
      if(response.status != 200){
        dispatch({ type: FETCH_WORD_DETAILS_FAILURE, payload: data.message+" "+data.resolution });
      }
      else{
        dispatch({ type: FETCH_WORD_DETAILS_SUCCESS, payload: data });
      }
      
    } catch (error) { // not catching error in local machine but catching on vercel
    
      dispatch({ type: FETCH_WORD_DETAILS_FAILURE, payload: error.message });
    }
  };
};
