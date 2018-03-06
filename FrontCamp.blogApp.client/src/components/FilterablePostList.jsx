import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import VisiblePostList from '../containers/VisiblePostList';
import { Link } from "react-router-dom";

const FilterablePostList = () => (
  <div className="col s11">
    <div className="row">
      <div className="col s4">
        <SearchBar />
        <Link to={'/blogs/0'} className="waves-effect waves-light btn green lighten-1">Add Post</Link>
      </div>
      <div className="col s8">
        <VisiblePostList/>
      </div>
    </div>
  </div>
);

export default FilterablePostList;