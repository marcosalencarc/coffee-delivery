export enum CoffeCategory {
  TRADICIONAL = 'TRADICIONAL',
  COM_LEITE = 'COM LEITE',
  GEALDO = 'MARK_CURRENT_CYCLE_AS_FINISHED',
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
