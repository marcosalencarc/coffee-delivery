import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const InfoContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;

  img {
    flex: 1;
    display: flex;
  }

  img#intro-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const InfoTitle = styled.div`
  flex: 2;
  line-height: 1.5rem;
  > h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme['base-text']}
  }
  > span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme['base-subtitle']}
  }
`

export const InfoContent = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    ${mixins.fonts.textM}
  }
  svg {
    padding: 8px;
    border-radius: 999px;
  }
`

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`
