import {
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_POST_REQUEST,
  POST_POST_SUCCESS,
  POST_POST_FAILURE,
  POST_POST_REQUEST,
  POST_COMMENTS_REQUEST,
  POST_COMMENTS_FAILURE,
  POST_COMMENTS_SUCCESS,
  POST_LIKES_REQUEST,
  POST_LIKES_FAILURE,
  POST_LIKES_SUCCESS
} from "./actionTypes"

export const initstate = {
    posts: [],
    likes: [],
    comments : [],
    isError: false,
    isLoading : false
  };
  
  const linkedinReducer = (state = initstate, {type,payload}) => {
    switch (type) {
      case POST_POST_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case POST_POST_SUCCESS:
        console.log(payload)
        return {
          ...state,
          isLoading: false,
          posts: payload,
          isError: false
        };
      case POST_POST_FAILURE:
        return {
          ...state,
          isError: true
        };
      case GET_POST_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case GET_POST_SUCCESS:
        console.log(payload)
        return {
          ...state,
          isLoading: false,
          posts: payload,
          isError: false
        };
      case GET_POST_FAILURE:
        return {
          ...state,
          isError: true
        };
      case POST_COMMENTS_FAILURE:
        return{
          ...state,
          isError: true
        }
      case POST_COMMENTS_REQUEST:
        return{
          ...state,
          isLoading: true
        }
      case POST_COMMENTS_SUCCESS:
        return{
          ...state,
          comments : payload,
          isLoading : false,
          isError : false
        };
      default:
        return state;
    }
  };
  
  export default linkedinReducer;
  