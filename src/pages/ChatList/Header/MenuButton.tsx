import React, { useCallback } from 'react';

const MenuButton = () => {
  const handleClick = useCallback(() => {
    // TODO
  }, []);
  return <img src="images/ic-list.svg" onClick={handleClick} />;
};

export default MenuButton;
