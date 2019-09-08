import React, { useContext, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

import ChatMsgStore from '../../../store/chatMsgStore';

export const ITEM_TYPE = 'image';

interface Props {
  src: string;
  state: TransitionStatus;
  onUpload: (src: string) => void;
}

const DraggableImage = (props: Props) => {
  const { src, state, onUpload } = props;

  const [{ isDragging }, dragRef, preview] = useDrag({
    item: { src, type: ITEM_TYPE },
    end: (item: { src: string } | undefined, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onUpload(item.src);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <div ref={dragRef}>
      <Image src={src} state={state} />
    </div>
  );
};

export default DraggableImage;

const Image = styled.img<{ state: TransitionStatus }>`
  min-width: 46px;
  height: 46px;
  border-radius: 4px;
  margin-right: 10px;
  transition: 0.3s;
  transform: scale(${({ state }) => (state === 'entering' || state === 'entered' ? 1 : 0)});
`;
