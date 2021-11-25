import styled from 'styled-components'

import { Search } from '../../styles/icons'

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`

export const SearchWrapper = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;

  max-height: 57px;
  width: min(399px, 100%);

  padding: 10px 24px;
  background: var(--primary);
`

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;

  font-size: 14px;

  border-radius: 19.5px;
  padding: 0 10px 0 52px;

  background: var(--search);

  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    z-index: 1;
    top: -33px;
    left: 15px;

    transition: 180ms ease-in-out;
  }
`

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 3px;
  padding: 57px 24px 200px;

  > div + div {
    margin-top: 15px;
  }
`
