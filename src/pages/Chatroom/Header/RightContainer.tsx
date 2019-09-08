import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

import SearchButton from './SearchButton';
import UploadButton from './UploadButton';

const duration = 300;

interface Props {
  onClickUpload: () => void;
}

const RightContainer = (props: Props) => {
  const { onClickUpload } = props;

  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
    return () => setInProp(false);
  }, []);

  return (
    <Transition
      onEnter={node => node.offsetHeight}
      in={inProp}
      timeout={{ enter: 0, exit: duration }}
      mountOnEnter
      unmountOnExit
      appear
    >
      {state => (
        <>
          <UploadButton state={state} onClickUpload={onClickUpload} />
          <Divider />
          <SearchButton state={state} />
        </>
      )}
    </Transition>
  );
};

export default RightContainer;

const Divider = styled.div`
  width: 16px;
`;
