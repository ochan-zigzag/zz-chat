import React from 'react';
import styled from 'styled-components';

import { CHARCOAL_GREY, CHARCOAL_GREY_TWO, WHITE } from '../../../commons/colors';
import { ColumnContainer, RowSpaceBetweenContainer } from '../../../commons/styles';

interface Props {
  profileImgUrl?: string;
  name: string;
}

const Row = (props: Props) => {
  const { profileImgUrl, name } = props;
  return (
    <Container>
      <ProfileImage src={profileImgUrl} />
      <ColumnContainer>
        <RowSpaceBetweenContainer>
          <Name>{name}</Name>
          <LastMsgDate>09:32</LastMsgDate>
        </RowSpaceBetweenContainer>
      </ColumnContainer>
    </Container>
  );
};

export default Row;

const Container = styled.div`
  height: 74px;
  width: 100%;
  background-color: ${WHITE};
  padding: 0 16px;
  display: flex;
  flex-direction: row;
`;

const ProfileImage = styled.img`
  width: 56px;
  hegiht: 56px;
  border-radius: 100%;
`;

const Name = styled.span`
  font-size: 16px;
  color: ${CHARCOAL_GREY};
`;

const LastMsgDate = styled.span`
  font-size: 11px;
  color: ${CHARCOAL_GREY_TWO};
`;
