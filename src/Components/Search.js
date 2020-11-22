import React from 'react';

const Search = ({search, setSearch, handleSubmit}) => {
  return (
    <form className="" onSubmit={handleSubmit}>
      <input type="text" placeholder={'put city name ...'} onChange={(e) => setSearch(e.target.value)}/>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;
