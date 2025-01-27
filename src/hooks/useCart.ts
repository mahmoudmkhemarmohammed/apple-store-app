import actGetCartProducts from "@store/cart/act/actGetCartProducts";
import { cleanUpCart } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
const useCart = () => {
  const [showConfirmAnimation, setShowConfirmAnimation] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { items, loading, error, productsFullInfo } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();
  const products = productsFullInfo.map((product) => ({
    ...product,
    quantity: items[product.id],
  }));

  const fullTotal =
    products.length > 0 &&
    products
      .map((el) => el.price * el.quantity)
      .reduce((acc, curr) => acc + curr);

  useEffect(() => {
    const promise = dispatch(actGetCartProducts());
    return () => {
      // Abort the promise if the component is unmounted (cleanup)
      promise.abort();

      // Clean up the cart when the component unmounts
      dispatch(cleanUpCart());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    fullTotal,
    dispatch,
    products,
    showConfirmAnimation,
    setShowConfirmAnimation,
    showModal,
    setShowModal,
  };
};

export default useCart;
