import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  margin: 0rem auto;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`
