import React from 'react';
import styled from 'styled-components';
import AddFeed from '../AddFeedPage/index';
import Feeds from '../Feeds/index';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #862600;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  background-color: #AD4015;
`;

const FeedContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 500px;
  background-color: white;
  height: 70vh;
  margin: 20px auto;
  border: 3px solid #040405;
  border-radius: 10px;
  padding: 5px;
`;

const FeedsPage = props => (
  <Wrapper>
    <Container>
      <FeedContainer>
        <Feeds />
      </FeedContainer>
      <AddFeed />
    </Container>
  </Wrapper>
);

export default FeedsPage;
