import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CoffeItemContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 18rem;
  width: 16rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 1rem;

  > h1 {
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme['base-subtitle']};
  }
  > h2 {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
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

export const CoffeCategories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  span {
    ${mixins.fonts.tag}
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  margin-top: 32px;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${(props) => props.theme['base-text']};
  }
`
export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme['yellow-dark'] : theme['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;
    border: none;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.yellow : theme.purple};
    }
  }
`
