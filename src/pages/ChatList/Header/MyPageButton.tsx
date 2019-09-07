import React, { useCallback } from 'react';

const MyPageButton = () => {
  const handleClick = useCallback(() => {
    // TODO
  }, []);
  return <img src="images/ic-person.svg" onClick={handleClick} />;
};

export default MyPageButton;
