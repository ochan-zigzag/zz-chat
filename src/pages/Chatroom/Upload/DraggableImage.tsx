import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

export const ITEM_TYPE = 'image';

interface Props {
  src: string;
  state: TransitionStatus;
}
const DraggableImage = (props: Props) => {
  const { src, state } = props;
  const [{ isDragging }, dragRef, preview] = useDrag({
    item: { src, type: ITEM_TYPE },
    end: (item: { name: string } | undefined, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log('you drpoed', { dropResult });
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
