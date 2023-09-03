// import { POST_FETCHING,POST_FETCH_SUCCESS,POST_FETCH_ERROR } from "./actionTypes"; 
// import axios from "axios";

// export const postFetching = () => {
//     return {
//         type: POST_FETCHING
//     }
// }

// export const postFetchSuccess = (data) => {
//     return {
//         type: POST_FETCH_SUCCESS,
//          payload: data
//     }
// }

// export const postFetchError = (error) => {
//     return {
//         type: POST_FETCH_ERROR,
//         payload: error
//     }
// }

// /*
// let initialState = {
//     loading:  false,
//     data: [],
//     error: null
// }

// */

// export function fetchPost(){
//     return function(dispatch){
//         dispatch(postFetching())
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((response)=>{
//             dispatch(postFetchSuccess(response.data))
//         })
//         .catch((err)=>{
//                 dispatch(postFetchError(err.message))
//         })
//     }
// }








// // let c = 0
// // function sumOf2Numbers(a,b){
// //     return a + b+ ++c;
// // }


// // sumOf2Numbers(2,3);
// // sumOf2Numbers(2,3);
// // sumOf2Numbers(2,3);
// // sumOf2Numbers(2,3);


// src/redux/actionTypes.js

// History related action types
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

// Word details related action types
export const FETCH_WORD_DETAILS_REQUEST = 'FETCH_WORD_DETAILS_REQUEST';
export const FETCH_WORD_DETAILS_SUCCESS = 'FETCH_WORD_DETAILS_SUCCESS';
export const FETCH_WORD_DETAILS_FAILURE = 'FETCH_WORD_DETAILS_FAILURE';
