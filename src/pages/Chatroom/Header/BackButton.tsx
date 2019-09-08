import React, { useCallback } from 'react';

interface Props {
  onClickBack: () => void;
}

const BackButton = (props: Props) => {
  const { onClickBack } = props;

  const handleClick = useCallback(() => {
    onClickBack();
  }, []);

  return <img src="/images/ic-back.svg" onClick={handleClick} />;
};

export default BackButton;
