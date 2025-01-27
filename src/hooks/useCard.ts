import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";
import actLikeToggle from "@store/wishlist/act/actLikeToggle";
import { addToast } from "@store/toasts/toastsSlice";
import { useLocation, useParams } from "react-router-dom";

type TUseCardParams = {
  discount: number;
  price: number;
  id: number;
  title: string;
};

const useCard = ({ discount, price, id, title }: TUseCardParams) => {
    
  const { accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const discountPercentage = ((discount / price) * 100).toFixed(2);
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingWishlist, setIsLoadingWishlist] = useState(false);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsIds);
  const isLiked = wishlistItemsId.includes(id);

  const handelLikeToggle = () => {
    if (accessToken) {
      setIsLoadingWishlist(true);
      dispatch(actLikeToggle(id))
        .unwrap()
        .then(() => {
          setIsLoadingWishlist(false);
          if (!isLiked) {
            dispatch(
              addToast({
                title,
                message: `The Item added to wishlist successfully`,
                type: "success",
              })
            );
          } else {
            dispatch(
              addToast({
                title,
                message: `The Item Removed From wishlist`,
                type: "danger",
              })
            );
          }
        })
        .catch((error) => {
          setIsLoadingWishlist(false);
          dispatch(
            addToast({
              message: error,
              type: "danger",
            })
          );
        });
    } else {
      dispatch(
        addToast({
          type: "warning",
          message: "Please Login To Add Your Wishlist",
        })
      );
    }
  };

  const handleClick = () => {
    dispatch(addToCart(id));
    setIsLoading(true);
    dispatch(
      addToast({
        title,
        message: `The Item added to cart successfully`,
        type: "success",
      })
    );
  };
  useEffect(() => {
    if (!isLoading) {
      return;
    }
    const timeLoading = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timeLoading);
  }, [isLoading]);

  return {
    handelLikeToggle,
    handleClick,
    pathname,
    discountPercentage,
    productId,
    isLoadingWishlist,
    isLiked,
    isLoading
  };
};

export default useCard;
