import React, { Component } from 'react';
import { searchText, fetchQuery, searchOption } from '../redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SearchBar extends Component {

  // Called when user starts typing into the Search Bar
  onChange = e => {
    this.props.searchText(e.target.value)
  }

  onChangeOption = e => {
    this.props.searchOption(e.target.value)
  }

  // Clicking Search button fires off fetchQuery based
  // on the provided text.
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchQuery(this.props.option, this.props.text);
  }

  render() {
    const searchResults = this.props.hits.map((item, i) => (
      <tr key={i}>
        <th scope="row">{(item.hasOwnProperty("name") ? item.name : item.title)}</th>
        <td><p className="text-right"><a href="#" className="btn Details" role="button" aria-pressed="true">SEE DETAILS</a></p></td>
      </tr>
    ));

    return (
      <div className="row mb-2 starwars-main">
        <div className="col-md-6" id="SearchContainer">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="row justify-content-center align-items-center">
                <span className="d-inline-block mb-3 What-are-you-searching-for">What are you searching for?</span>

                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <div className="form-group">
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" checked={this.props.option === 'people'} onChange={this.onChangeOption} component="input" className="custom-control-input" id="people" name="option" value="people" />
                        <label className="custom-control-label" htmlFor="people">People</label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" checked={this.props.option === 'films'} onChange={this.onChangeOption} component="input" className="custom-control-input" id="films" name="option" value="films" />
                        <label className="custom-control-label" htmlFor="films">Movie</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" onChange={this.onChange} component="input" name="value" placeholder="e.g. Chewbacca, Yoda, Boba Fett" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="SearchButton" disabled={!this.props.text}>Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6" id="ResultContainer">
          <div className="card flex-md-row mb-4 box-shadow h-md-250 MatchesBG">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="row justify-content-center align-items-center">
                <span>Result</span>
                <table className="table table-hover">
                  <tbody>{searchResults}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  fetchQuery: PropTypes.func.isRequired,
  searchText: PropTypes.func.isRequired,
  hits: PropTypes.array.isRequired,
  searchOption: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  hits: state.results.items,
  text: state.results.text,
  option: state.results.option
});

export default connect(
  mapStateToProps,
  { searchText, fetchQuery, searchOption }
)(SearchBar);