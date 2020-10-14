import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SEARCH_QUERY,
  FETCH_QUERY,
  SEARCH_OPTION
} from './searchbarTypes';

const initialState = {
  text: '',
  items: [],
  option: 'people',
  loading: false,
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_SUCCESS:
      return {
        loading: false,
        items: action.payload,
        error: ''
      }
    case FETCH_FAILURE:
      return {
        loading: false,
        items: [],
        error: action.payload
      }
    case SEARCH_QUERY:
      return {
        ...state,
        text: action.payload,
      }
    case FETCH_QUERY:
      return {
        ...state,
        items: action.payload
      }
    case SEARCH_OPTION:
      return {
        ...state,
        option: action.payload
      }
    default:
      return state
  }
}