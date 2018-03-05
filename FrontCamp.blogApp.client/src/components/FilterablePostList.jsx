import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import VisiblePostList from '../containers/VisiblePostList';
import { Link } from "react-router-dom";

const FilterablePostList = () => (
  <div className="col s8 offset-s1">
    <Link to={'/blogs/0'}>Add Post</Link>
    <SearchBar />
    <VisiblePostList/>
  </div>
);

export default FilterablePostList;