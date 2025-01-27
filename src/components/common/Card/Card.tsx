import { TProduct } from "@types";
import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import LazyImage from "../LazyImage/LazyImage";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";
import useCard from "@hooks/useCard";
import {motion} from "motion/react"
const Card = ({ id, img, title, price, isOnSale, discount , index}: TProduct) => {
  const {
    discountPercentage,
    handelLikeToggle,
    handleClick,
    isLoadingWishlist,
    pathname,
    productId,
    isLiked,
    isLoading,
  } = useCard({ id, title, discount, price });

  return (
    <motion.div
    transition={{duration: .4 , delay: typeof index === "number" ? index * .1 : 0 }}
    initial={{opacity: 0 , y: 10 , filter: "blur(4px)"}}
    whileInView={{opacity: 1 , y: 0 ,filter: "blur(0px)"}}
    viewport={{once: true}}
    className="min-h-[448px] relative card flex justify-between flex-col bg-white shadow-sm p-5 rounded-3xl duration-300 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="text my-5">
        <h2 className="text-2xl font-bold">
          {title.length > 20 ? `${title.substring(0, 20)}...` : title}
        </h2>
      </div>
      <div className="img">
        <Link to={`/all-products/${id}`}>
          <LazyImage
            className={`${
              pathname === "/" ||
              pathname === "/all-products" ||
              pathname === `/all-products/${productId}`
              ? "h-[246.91px] mx-auto"
              : ""
            }`}
            img={img}
            alt={title}
            />
        </Link>
      </div>
      <div className="boxed flex justify-between items-center mt-5">
        <h2 className="font-bold">{price} $</h2>
        {isLoadingWishlist ? (
          <AiOutlineLoading3Quarters className="animate-spin text-[27px] text-[#00aaff]" />
        ) : isLiked ? (
          <IoMdHeart
          className="text-[35px] text-[#ff0059] cursor-pointer"
          onClick={handelLikeToggle}
          />
        ) : (
          <CiHeart
          className="text-[35px] text-[#ff0059] cursor-pointer"
          onClick={handelLikeToggle}
          />
        )}
        {!isLoading ? (
          <IoCart
            className="text-[35px] text-[#00aaff] cursor-pointer"
            onClick={handleClick}
            />
          ) : (
            <div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center">
            <AiOutlineLoading3Quarters className="animate-spin text-[30px] text-[#00aaff]" />
          </div>
        )}
      </div>
      {isOnSale && (
        <div className="absolute top-3 right-3 bg-[#00aaff21] py-2 px-3 rounded-lg font-bold">
          {discountPercentage}%
        </div>
      )}
    </motion.div>
  );
};

export default Card;
