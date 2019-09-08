import React, { useCallback } from 'react';

const BackButton = () => {
  const handleClick = useCallback(() => {
    // TODO
  }, []);
  return <img src="/images/ic-back.svg" onClick={handleClick} />;
};

export default BackButton;
