import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { useDrop } from 'react-dnd';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';

import { ChatMsg } from '../../models/chatMsg';
import User from '../../models/user';
import ChatMsgStore from '../../store/chatMsgStore';
import ChatMsgBox from './ChatMsgBox';
import { ITEM_TYPE } from './Upload/DraggableImage';
import { GALLERY_CAROUSEL_HEIGHT } from './Upload/GalleryCarousel';
import UploadingImage from './Upload/UploadingImage';

interface Props {
  state: TransitionStatus;
  myUser: User;
  chatMsgs: ChatMsg[];
}

const ChatMsgContainer = observer((props: Props) => {
  const { state, myUser, chatMsgs } = props;

  const { uploadingImageUrl } = useContext(ChatMsgStore);

  const [inProp, setInProp] = useState(false);

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: () => ({ name: 'chatMsgContainer' }),
    collect: monitor => ({ isOver: monitor.isOver() }),
  });

  return (
    <Container ref={drop} state={state}>
      {chatMsgs.map(chatMsg => (
        <ChatMsgBox key={chatMsg.id} chatMsg={chatMsg} myUserId={myUser.id} inProp={inProp} setInProp={setInProp} />
      ))}
      {!!uploadingImageUrl && <UploadingImage src={uploadingImageUrl} />}
    </Container>
  );
});

export default ChatMsgContainer;

const Container = styled.div<{ state: TransitionStatus }>`
  flex: 1;
  margin-top: ${({ state }) => (state === 'entering' || state === 'entered' ? GALLERY_CAROUSEL_HEIGHT : 0)};
  transition: margin-top 0.3s;
`;
