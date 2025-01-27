import ContentLoader from "react-content-loader";
import { SwiperSlide } from "swiper/react";

const HomeBannerSkeletons = () => {
  const itemRenderd = (
    <ContentLoader
      speed={1}
      width={"100%"}
      height={"100%"}
      backgroundColor="#e8e8e8"
      foregroundColor="#ffffff"
    >
      <rect x="6" y="-1" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  );
  return <SwiperSlide className="h-[500px] rounded-full max-lg:h-[300px] max-sm:h-[180px]">{itemRenderd}</SwiperSlide>;
};

export default HomeBannerSkeletons;
