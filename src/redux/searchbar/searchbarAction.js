import {
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