import getCartTotoalQuantity from "@store/cart/selectors";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderCart = () => {
  const totalQuantity = useAppSelector(getCartTotoalQuantity);
  const [isAnimate, setIsAnimate] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 400);
    return () => clearTimeout(debounce);
  }, [dispatch, totalQuantity]);

  return (
    <Link to={"/cart"} className="relative">
      <IoCart className="text-[40px] text-[#00aaff]" />
      {totalQuantity > 0 && (
        <div
          className={`${
            isAnimate ? "active" : ""
          } absolute -top-3 -right-3 flex justify-center items-center bg-[#ff008c] w-[30px] h-[30px] rounded-[50%]`}
        >
          {totalQuantity}
        </div>
      )}
    </Link>
  );
};

export default HeaderCart;
