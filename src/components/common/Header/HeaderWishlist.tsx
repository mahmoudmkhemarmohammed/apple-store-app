import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetWishlist from "@store/wishlist/act/actGetWishlist";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const HeaderWishlist = () => {
  const wishlistItemsQuantity = useAppSelector(
    (state) => state.wishlist.itemsIds
  );
  const [isAnimate, setIsAnimate] = useState(false);
  const dispatch = useAppDispatch();

  // Fetch wishlist itemsIds on component mount or when itemsIds change in the store.
  useEffect(() => {
    dispatch(actGetWishlist("itemsIds"));
  }, [dispatch]);

  // Animate the wishlist counter when the quantity changes.
  useEffect(() => {
    if (!wishlistItemsQuantity.length) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 400);
    return () => clearTimeout(debounce);
  }, [wishlistItemsQuantity]);

  return (
    <Link to={"/wishlist"} className="relative">
      <CiHeart className="text-[40px] text-[#00aaff]" />
      {wishlistItemsQuantity.length > 0 && (
        <div
          className={`${
            isAnimate ? "active" : ""
          } absolute -top-3 -left-3 flex justify-center items-center bg-[#ff008c] w-[30px] h-[30px] rounded-[50%]`}
        >
          {wishlistItemsQuantity.length}
        </div>
      )}
    </Link>
  );
};

export default HeaderWishlist;
