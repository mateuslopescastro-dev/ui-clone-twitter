import styled from 'styled-components'

type ButtonProps = {
  outlined?: boolean
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};

  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

  padding: 16px;
  border-radius: 25px;

  font-size: 15px;
  font-weight: bold;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }
`
