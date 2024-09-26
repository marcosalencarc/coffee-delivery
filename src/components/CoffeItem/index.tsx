import type { CoffeItemProps } from '../../model/Coffe'
import { CoffeImage, CoffeItemContainer } from './styles'

export function CoffeItem({ ...props }: CoffeItemProps) {
  return (
    <CoffeItemContainer>
      <CoffeImage src={props.img} />
      {props.name}
    </CoffeItemContainer>
  )
}
