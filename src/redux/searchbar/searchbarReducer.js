import {
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