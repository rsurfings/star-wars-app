import React, { Component } from 'react';
import { searchText, fetchQuery, searchOption } from '../redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SearchDetails extends Component {

    render() {
        return (
            <div className="row mb-2 starwars-main" >
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <div className="row justify-content-center align-items-center">
                                <span className="d-inline-block mb-3 What-are-you-searching-for">What are you searching for?</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchDetails