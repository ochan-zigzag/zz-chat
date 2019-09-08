import React, { useState } from 'react';
import styled from 'styled-components';

import { BLACK } from '../../../commons/colors';
import useInterval from '../../../commons/useInterval';
import ProgressBar from '../../../components/ProgressBar';

interface Props {
  src: string;
}

const UploadingImage = React.memo((props: Props) => {
  const { src } = props;

  const [progress, setProgress] = useState(0);

  useInterval(() => {
    setProgress(progress + 2.5);
  }, 50);

  return (
    <Container>
      <Image src={src}>
        <CancelButton>
          <img src="images/ic-close.svg" />
        </CancelButton>
      </Image>
      <ProgressBar progress={progress} />
    </Container>
  );
});

export default UploadingImage;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 16px 0;
`;

const Image = styled.div<{ src: string }>`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  background-image: url(${props => props.src});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`;

const CancelButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${BLACK};
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
