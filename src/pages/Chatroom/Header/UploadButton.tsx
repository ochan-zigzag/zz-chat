import React, { useCallback } from 'react';

interface Props {
  onClickUpload: () => void;
}

const UploadButton = (props: Props) => {
  const { onClickUpload } = props;

  const handleClick = useCallback(() => {
    onClickUpload();
  }, [onClickUpload]);

  return <img src="images/ic-upload.svg" onClick={handleClick} />;
};

export default UploadButton;
