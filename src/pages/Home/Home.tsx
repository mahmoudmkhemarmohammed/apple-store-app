import CommonSwiperGridList from "@components/common/CommonSwiperGridList/CommonSwiperGridList";
import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import HomeCategory from "@components/eCommerce/Category/HomeCategory";
import FeaturesIcons from "@components/eCommerce/FeaturesIcons/FeaturesIcons";
import HomeBanner from "@components/eCommerce/HomeBanner/HomeBanner";
import NewArrival from "@components/eCommerce/NewArrival/NewArrival";
import actGetAllProducts from "@store/products/act/actGetAllProducts";
import actGetBestSalingProducts from "@store/products/act/actGetBestSalingProducts";
import actGetOnSaleProducts from "@store/products/act/actGetOnSaleProducts";
import { cleanUpAllProducts } from "@store/products/allProductsSlice";
import { cleanUpBestSalingProducts } from "@store/products/bestSalingProductsSlice";
import { cleanUpOnSaleProducts } from "@store/products/onSaleProductsSlice";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCategory />
      <SpecialHeading title="Flash Sales" />
      <CommonSwiperGridList
        stateSelector={(state) => state.onSaleProducts}
        actionAsync={actGetOnSaleProducts}
        btnStyle="sale"
        cleanUp={cleanUpOnSaleProducts}
      />
      <SpecialHeading title="Best Seller" />
      <CommonSwiperGridList
        stateSelector={(state) => state.bestSalingProducts}
        actionAsync={actGetBestSalingProducts}
        btnStyle="best"
        cleanUp={cleanUpBestSalingProducts}
      />
      <SpecialHeading title="New Arrival" />
      <NewArrival />
      <SpecialHeading title="Our Products" />
      <CommonSwiperGridList
        stateSelector={(state) => state.allProducts}
        actionAsync={actGetAllProducts}
        btnStyle="all"
        cleanUp={cleanUpAllProducts}
      />
      <FeaturesIcons />
    </>
  );
};

export default Home;
