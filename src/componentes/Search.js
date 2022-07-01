import React from 'react';
import '../styles/search.css'

const Search = () => {
    return (
        <div id='content-search'>
          <form id="search-in-center" >
            <label id="label-search" for="search" >Search</label>
            <input id="input-search" type="text"  placeholder='Search a vegetable...'/>
          </form>  
        </div>
    );
}

export default Search;
