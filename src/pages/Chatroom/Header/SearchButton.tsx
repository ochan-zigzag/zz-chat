import React, { useCallback } from 'react';

const SearchButton = () => {
  const handleClick = useCallback(() => {
    // TODO
  }, []);
  return <img src="images/ic-search.svg" onClick={handleClick} />;
};

export default SearchButton;
