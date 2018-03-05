import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.setFilter(e.target.value);
  }

  render() {
    const filterAuthor = this.props.filterValue && this.props.filterValue.author;
    return (
      <div className="row">
        <div className="input-field col s12">
          <input className="validate" id="postsFilter" type="text" value={filterAuthor} onChange={this.handleFilterTextChange} placeholder="Filter by author..."/>
          <label htmlFor="postsFilter">Filter posts</label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filterValue: state.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilter: (author) => {
      dispatch(setFilter(author));
    }
  }
};

SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default SearchBar;