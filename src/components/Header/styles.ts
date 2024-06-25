import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  nav {
    display: flex;
    gap: 0.5rem;

    div {
      display: flex;
      gap: 4px;
      padding: 0 1rem;
      height: 3rem;
      align-items: center;
      justify-content: center;

      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      svg {
        color: ${(props) => props.theme.purple};
      }
      font-weight: 500;
      border-radius: 8px;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
      border-radius: 8px;

      background: ${(props) => props.theme['yellow-light']};

      color: ${(props) => props.theme['yellow-dark']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }
  }
`
