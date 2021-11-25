import React from 'react'

import {
  Container,
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles'

export const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>UEFA Champions League</strong>
            <span>@ChampionsLeague</span>

            <Dot />

            <time>37 min</time>
          </Header>

          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              18
            </Status>

            <Status>
              <LikeIcon />
              18
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}
