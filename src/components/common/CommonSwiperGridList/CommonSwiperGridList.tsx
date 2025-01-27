import { useEffect } from "react";
import Loading from "@components/feedback/Loading/Loading";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import { Navigation } from "swiper/modules";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RootState } from "@store/store";
import { TProduct, TLoading } from "@types";
import actGetProductByCatPrefix from "@store/products/act/actGetProductByCatPrefix";

type TCommonSwiperGridList = {
  stateSelector: (state: RootState) => {
    records: TProduct[];
    loading: TLoading;
    error: string | null;
  };
  actionAsync?: unknown;
  btnStyle: string;
  isSimilar?: boolean;
  ignoredId?: string | number;
  catPrefix?: string;
  cleanUp?: unknown
};

const CommonSwiperGridList = ({
  stateSelector,
  actionAsync,
  btnStyle,
  isSimilar,
  ignoredId,
  catPrefix,
  cleanUp
}: TCommonSwiperGridList) => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(stateSelector);
  useEffect(() => {
    if (isSimilar == true && typeof catPrefix === "string") {
      dispatch(actGetProductByCatPrefix(catPrefix));
    } else {
      if (typeof actionAsync === "function") {
        dispatch(actionAsync());
      }
    }
    
    return () => {
      if (typeof cleanUp === "function") {
        dispatch(cleanUp());
      }
    };
  }, [dispatch, actionAsync, catPrefix, isSimilar , cleanUp]);
  return (
    <section>
      <div className="container relative">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          className="py-3"
          navigation={{
            nextEl: `.nextEl-${btnStyle}`,
            prevEl: `.prevEl-${btnStyle}`,
          }}
          modules={[Navigation]}
        >
          <Loading status={loading} error={error} type="productSlider">
            {isSimilar
              ? records
                  .filter((record) => record.id != ignoredId)
                  .map((record, index) => (
                    <SwiperSlide key={record.id}>
                      <Card index={index} {...record} />
                    </SwiperSlide>
                  ))
              : records.map((record, index) => (
                  <SwiperSlide key={record.id}>
                    <Card index={index} {...record} />
                  </SwiperSlide>
                ))}
          </Loading>
        </Swiper>
        <div className="btns flex gap-3 items-center z-20 absolute -top-[12%] right-1 max-sm:-top-[9%]">
          <FaArrowCircleLeft
            className={`prevEl-${btnStyle} text-[40px] text-[#00aaff] cursor-pointer max-sm:text-[35px]`}
          />
          <FaArrowCircleRight
            className={`nextEl-${btnStyle} text-[40px] text-[#00aaff] cursor-pointer max-sm:text-[35px]`}
          />
        </div>
        <div className={`btn mt-1 flex justify-between gap-5 max-sm:*:text-[15px]`}>
          <Link
            className="bg-white shadow-sm text-lg rounded-md py-[17px] grow text-center hover:bg-[#00aaff87]"
            to={"/categories"}
          >
            View All Categories
          </Link>
          <Link
            className="bg-white shadow-sm text-lg rounded-md py-[17px] grow text-center duration-300 hover:bg-[#00aaff87]"
            to={"/all-products"}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommonSwiperGridList;
