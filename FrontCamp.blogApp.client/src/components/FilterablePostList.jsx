import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import VisiblePostList from '../containers/VisiblePostList';

const FilterablePostList = () => (
  <div className="col s8 offset-s1">
    <SearchBar />
    <VisiblePostList/>
  </div>
);

export default FilterablePostList;