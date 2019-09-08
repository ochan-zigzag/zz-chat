import React, { memo } from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

const ImageDragPreview = memo((props: Props) => {
  const { src } = props;

  return <PreviewImage src={src} />;
});

export default ImageDragPreview;

const PreviewImage = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 4px;
`;
