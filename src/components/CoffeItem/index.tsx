import { Check, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import type { CoffeItemProps } from '../../model/Coffe'
import { QuantityInput } from '../Form/QuantityInput'
import {
  BuyContainer,
  CoffeCategories,
  CoffeImage,
  CoffeItemContainer,
  Order,
  Price,
} from './styles'

export function CoffeItem({ ...props }: CoffeItemProps) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    console.log('Item add')
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <CoffeItemContainer>
      <CoffeImage src={props.img} />
      <CoffeCategories>
        {props.categories?.map((category) => {
          return <span key={category}>{category}</span>
        })}
      </CoffeCategories>
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <BuyContainer>
        <Price>
          <span>R$</span>
          <span>{props.price.toFixed(2)}</span>
        </Price>
        <Order>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button type="button" disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check weight="fill" size={22} color={theme['base-card']} />
            ) : (
              <ShoppingCart size={22} color={theme['base-card']} />
            )}
          </button>
        </Order>
      </BuyContainer>
    </CoffeItemContainer>
  )
}
