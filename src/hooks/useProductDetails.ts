import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetSingleProduct from "@store/products/act/actGetSingleProduct";
import { addToCart } from "@store/cart/cartSlice";
import { addToast } from "@store/toasts/toastsSlice";
import actLikeToggle from "@store/wishlist/act/actLikeToggle";

const useProductDetails = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const id: number = Number(productId);
  const { item, loading, error } = useAppSelector(
    (state) => state.singleProduct
  );
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsIds);
  const isLiked = wishlistItemsId.includes(id);

  const { accessToken } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingWishlist, setIsLoadingWishlist] = useState(false);

  const handelClick = () => {
    dispatch(addToCart(id));

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 400);

    dispatch(
      addToast({
        title: item?.title,
        message: `The Item added to cart successfully`,
        type: "success",
      })
    );
  };

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
                title: item?.title,
                message: `The Item added to wishlist successfully`,
                type: "success",
              })
            );
          } else {
            dispatch(
              addToast({
                title: item?.title,
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

  const handelBuyProduct = () => {
    dispatch(addToCart(id))
    dispatch(addToast({
      message: "Item added To Cart Successfully Please Press Place Order",
      type: "success",
    }))
    navigate("/cart")
  }

  useEffect(() => {
    const promise = dispatch(actGetSingleProduct(productId as string));
    return () => {
      // Abort the promise if the component is unmounted (cleanup)
      promise.abort();
    };
  }, [dispatch, productId]);
  return {
    handelClick,
    handelLikeToggle,
    isLoading,
    isLoadingWishlist,
    item,
    loading,
    error,
    isLiked,
    handelBuyProduct
  };
};

export default useProductDetails;
