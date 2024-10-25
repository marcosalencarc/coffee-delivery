import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { CoffeItem } from '../../components/CoffeItem'
import { data } from '../../db/data'
import {
  CatalogContent,
  CoffeeList,
  HomeContainer,
  Info,
  InfoContainer,
  InfoContent,
  InfoTitle,
} from './style'

export function Home() {
  const theme = useTheme()
  return (
    <HomeContainer>
      <InfoContainer>
        <Info>
          <InfoTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </InfoTitle>
          <InfoContent>
            <span>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['yellow-dark'] }}
              />
              Compra simples e segura
            </span>
            <span>
              <Package
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['base-text'] }}
              />
              Compra simples e segura
            </span>
            <span>
              <Timer
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme.yellow }}
              />
              Compra simples e segura
            </span>
            <span>
              <Coffee
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme.purple }}
              />
              Compra simples e segura
            </span>
          </InfoContent>
        </Info>
        <img src="/src/assets/intro-img.svg" alt="" />
        <img src="/src/assets/intro-bg.svg" id="intro-bg" alt="" />
      </InfoContainer>
      <CatalogContent>
        <h2>Nossos Cafés</h2>
        <CoffeeList>
          {data.map((coffe) => {
            return (
              <CoffeItem
                key={coffe.id}
                id={coffe.id}
                name={coffe.name}
                description={coffe.description}
                img={coffe.img}
                categories={coffe.categories}
                price={coffe.price}
              />
            )
          })}
        </CoffeeList>
      </CatalogContent>
    </HomeContainer>
  )
}
