import Loading from "@components/feedback/Loading/Loading";
import useCategories from "@hooks/useCategories";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
const HomeCategory = () => {
  const { records, loading, error, navigate } = useCategories();
  return (
    <section className="home-category">
      <div className="container py-2">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <Loading status={loading} error={error} type="categorySlider">
            {records.map((record, index) => (
              <SwiperSlide
                className="w-fit h-fit"
                onClick={() =>
                  navigate(`/categories/products/${record.prefix}`)
                }
                key={record.id}
              >
                <motion.div
                  className="bg-white rounded-md flex flex-col items-center py-5 cursor-pointer"
                  transition={{
                    duration: 0.4,
                    delay: typeof index === "number" ? index * 0.1 : 0.4,
                  }}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                >
                  <img src={record.img} alt={record.title} className="w-2/5" />
                  <h3 className="text-xl mt-2 capitalize">{record.title}</h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Loading>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCategory;
