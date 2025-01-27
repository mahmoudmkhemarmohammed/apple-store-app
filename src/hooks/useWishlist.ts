import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetWishlist from "@store/wishlist/act/actGetWishlist";
import { cleanUpWishlistProductsFullInfo } from "@store/wishlist/wishlistSlice";

const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productFullInfo } = useAppSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    const promise = dispatch(actGetWishlist("productsFullInfo"));

    return () => {
      // Abort the promise if the component is unmounted (cleanup)
      promise.abort();
      
      // Clean up the wishlist when the component unmounts
      dispatch(cleanUpWishlistProductsFullInfo());
    };
  }, [dispatch]);

  return { loading, error, productFullInfo };
};

export default useWishlist;
