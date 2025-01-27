import Loading from "@components/feedback/Loading/Loading";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import LazyImage from "@components/common/LazyImage/LazyImage";
import useHomeBanner from "@hooks/useHomeBanner";
import { motion } from "motion/react";
const HomeBanner = () => {
  const { navigate, banners, error, loading } = useHomeBanner();
  return (
    <section>
      <div className="container mt-1">
        <Swiper
          className="rounded-xl max-sm:rounded"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <Loading status={loading} error={error} type="homeBanner">
            {banners.map((banner) => (
              <SwiperSlide
                key={banner.id}
                className="h-[500px] rounded-full max-lg:h-[300px] max-sm:h-[180px]"
              >
                <motion.div
                className="w-full h-full"
                  transition={{ duration: 0.4 }}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                >
                  <LazyImage
                    img={banner.img}
                    alt={banner.title}
                    className="h-full w-full"
                    onClick={() => navigate("/all-products")}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Loading>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeBanner;
