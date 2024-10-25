export enum CoffeCategory {
  TRADICIONAL = 'TRADICIONAL',
  COM_LEITE = 'COM LEITE',
  GELADO = 'GELADO',
  ESPECIAL = 'ESPECIAL',
  ALCOOLICO = 'ALCOÓLICO',
}

export interface CoffeItemProps {
  id: string
  name: string
  description: string
  img: string
  categories?: CoffeCategory[]
  price: number
}
