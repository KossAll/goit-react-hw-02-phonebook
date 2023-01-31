import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

class Search extends Component {
  setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
  };

  render() {
    return (
      <div className={style.search_container}>
        <h4>Find contacts by name</h4>
        <input onChange={this.setFilterValue}></input>
      </div>
    );
  }
}

Search.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
export default Search;
