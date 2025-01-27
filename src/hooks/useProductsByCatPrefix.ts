import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetProductByCatPrefix from "@store/products/act/actGetProductByCatPrefix";
import { cleanUpProductsByCategory } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useProductsByCatPrefix = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);
  const { cat_prefix } = useParams();

  useEffect(() => {
    const promise = dispatch(actGetProductByCatPrefix(cat_prefix as string));
    return () => {
      // Abort the promise if the component is unmounted (cleanup)
      promise.abort();
      // Clean up the store state when the component is unmounted, to avoid memory leaks
      dispatch(cleanUpProductsByCategory());
    };
  }, [dispatch, cat_prefix]);

  return { records, loading, error };
};

export default useProductsByCatPrefix;
