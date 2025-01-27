import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import Loading from "@components/feedback/Loading/Loading";
import { IoCart } from "react-icons/io5";
import { CiDeliveryTruck, CiHeart } from "react-icons/ci";
import { Ri24HoursFill } from "react-icons/ri";
import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import CommonSwiperGridList from "@components/common/CommonSwiperGridList/CommonSwiperGridList";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";
import useProductDetails from "@hooks/useProductDetails";
const ProductDetails = () => {
  const {
    handelClick,
    handelLikeToggle,
    isLoading,
    isLoadingWishlist,
    item,
    loading,
    error,
    isLiked,
    handelBuyProduct
  } = useProductDetails();

  const itemRenderd =
    item !== null ? (
      <>
        <div className="img">
          <InnerImageZoom
            src={item.img}
            className="w-[80%] max-xl:w-full rounded-xl shadow-md"
          />
        </div>
        <div className="content">
          <h2 className="text-[33px] font-bold capitalize">{item.title}</h2>
          <p className="text-[18px] leading-[1.7]">{item.description}</p>
          <h3 className="text-xl font-bold">
            {item.discount > 0 && <del>{item.price + item.discount}$</del>}{" "}
            {item.price} $
          </h3>
          <div className="icons flex justify-between items-center gap-3 my-3">
            <button className="btn bg-[#00aaff] py-3 px-5 rounded-lg text-[18px]" onClick={handelBuyProduct}>
              Buy Now
            </button>
            {isLoading ? (
              <div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center">
                <AiOutlineLoading3Quarters className="animate-spin text-[30px] text-[#00aaff]" />
              </div>
            ) : (
              <IoCart
                className="text-[35px] text-[#00aaff] cursor-pointer"
                onClick={handelClick}
              />
            )}
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
          </div>
          <div className="feature">
            <div className="delivery flex items-center gap-6 p-4 bg-slate-300 rounded-md mb-3 pl-5">
              <CiDeliveryTruck className="text-[35px]" />
              <div className="text">
                <h3 className="text-xl">Free Delivery</h3>
                <p className="text-lg">Fast and free access to your product</p>
              </div>
            </div>
            <div className="return flex items-center gap-6 p-4 bg-slate-300 rounded-md pl-5">
              <Ri24HoursFill className="text-[35px]" />
              <div className="text">
                <h3 className="text-xl">Return Delivery</h3>
                <p className="text-lg">Free 24 Dayes Delivery Returns</p>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : (
      "There Are No Item Available"
    );
  return (
    <>
      <section>
        <div className="container pt-3">
          <div className="details-box grid grid-cols-2 gap-5 max-xl:grid-cols-1">
            <Loading status={loading} error={error} type="details">
              {itemRenderd}
            </Loading>
          </div>
        </div>
      </section>
      <SpecialHeading title="Similar Products" />
      <CommonSwiperGridList
        stateSelector={(state) => state.products}
        btnStyle="similar"
        isSimilar={true}
        ignoredId={item?.id}
        catPrefix={item?.cat_prefix}
      />
    </>
  );
};

export default ProductDetails;
