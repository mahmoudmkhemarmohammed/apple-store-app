export type TProduct = {
  id: number;
  img: string;
  title: string;
  cat_prefix: string;
  price: number;
  description: string;
  isOnSale: boolean;
  discount: number;
  sales: number;
  quantity?: number;
  index?: number;
};
