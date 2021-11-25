import styled, { css } from 'styled-components'

import { Chat, Retweet, Favorite } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  max-width: 100%;
  border-bottom: 1px solid var(--outline);
`

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`

export const RetweetedIcon = styled(Retweet)`
  width: 16px;
  height: 16px;

  margin-left: 35px;
  margin-right: 9px;

  fill: var(--gray);
`

export const Body = styled.div`
  display: flex;
  position: relative;

  margin-top: 3px;
`

export const Avatar = styled.div`
  width: 49px;
  height: 49px;

  flex-shrink: 0;
  border-radius: 50%;

  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 2px;
  padding-left: 59px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

export const Dot = styled.div`
  background: var(--gray);

  width: 2px;
  height: 2px;

  margin: 0 10px;
`

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`

export const ImageContent = styled.div`
  width: 100%;
  height: min(285px, max(175px, 41vw));

  margin-top: 12px;

  border-radius: 14px;
  background: var(--outline);

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  flex-wrap: wrap;

  margin: 11px auto 0;

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: 330px) {
    width: 63%;
  }
`

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    &,
    > svg path {
      color: var(--retweet);
    }
  }

  &:nth-child(3) {
    &,
    > svg path {
      color: var(--like);
    }
  }
`

const iconsCss = css`
  width: 19px;
  height: 19px;
`

export const CommentIcon = styled(Chat)`
  ${iconsCss}
`

export const RetweetIcon = styled(Retweet)`
  ${iconsCss}
`

export const LikeIcon = styled(Favorite)`
  ${iconsCss}
`
