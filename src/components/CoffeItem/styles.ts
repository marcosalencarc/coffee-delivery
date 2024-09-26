import styled from 'styled-components'

export const CoffeItemContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 18rem;
  width: 16rem;
  background-color: ${(props) => props.theme['base-card']};
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

export const CoffeImage = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(0rem - 1.5rem - 6px);
`
