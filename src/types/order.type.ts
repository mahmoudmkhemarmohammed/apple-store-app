import { TProduct } from "./Product.type"

export type TOrderItem = {
    id: number
    userId: number
    subtotal: number
    items: TProduct[]
}