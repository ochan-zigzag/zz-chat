import React, { useCallback } from 'react';

const UploadButton = () => {
  const handleClick = useCallback(() => {
    // TODO
  }, []);
  return <img src="images/ic-upload.svg" onClick={handleClick} />;
};

export default UploadButton;
