import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoIgnite from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <div>
          <MapPin weight="fill" size={26} />
          Porto Alegre, RS
        </div>
        <NavLink to="/history" title="Histórico">
          <ShoppingCart weight="fill" size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
