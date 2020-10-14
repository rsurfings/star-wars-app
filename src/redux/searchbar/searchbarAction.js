import axios from 'axios'
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SEARCH_QUERY,
  FETCH_QUERY,
  SEARCH_OPTION
} from './searchbarTypes'

// Captures the Textual input in the Search Bar
export const searchText = text => dispatch => {
  dispatch({
    type: SEARCH_QUERY,
    payload: text
  });
};

export const searchOption = (option) => dispatch => {
  dispatch({
    type: SEARCH_OPTION,
    payload: option
  });
}

// Fired off after clicking SEARCH
export const fetchQuery = (option, text) => dispatch => {

  fetch(`https://swapi.dev/api/${option}/?search=${text}`)
    .then(res => res.json())
    .then(response => dispatch({
      type: FETCH_QUERY,
      payload: response.results
    }));
}

export const fetchSearch = (option, text) => {
  return (dispatch) => {
    dispatch(fetchRequest())
    axios
      .get(`https://swapi.dev/api/${option}/?search=${text}`)
      .then(response => {
        // response.data is the users
        const data = response.data
        dispatch(fetchSuccess(data))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchFailure(error.message))
      })
  }
}

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  }
}

export const fetchFailure = error => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}
