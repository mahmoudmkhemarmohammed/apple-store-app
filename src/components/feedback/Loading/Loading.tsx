import { TLoading } from "@types";
import ProductSkelectons from "../Skeletons/ProductSkelectons";
import CategorySkelectons from "../Skeletons/CategorySkeletons";
import DetailsSkeletons from "../Skeletons/DetailsSkeletons";
import ProductSliderSkelectons from "../Skeletons/ProductSliderSkeletons";
import HomeBannerSkeletons from "../Skeletons/HomeBannerSkeletons";
import CategorySliderSkeletons from "../Skeletons/CategorySliderSkeletons";
import CartSkeletons from "../Skeletons/CartSkeletons";
import LottieErrorHandler from "../Lottie/LottieErrorHandler";
import FilterationSkeletons from "../Skeletons/FilterationSkeletons";

const skeletonsComponents = {
  homeBanner: HomeBannerSkeletons,
  product: ProductSkelectons,
  productSlider: ProductSliderSkelectons,
  categorySlider: CategorySliderSkeletons,
  category: CategorySkelectons,
  details: DetailsSkeletons,
  cart: CartSkeletons,
  filter: FilterationSkeletons
};

type TLoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
  type: keyof typeof skeletonsComponents;
};

const Loading = ({ status, error, children, type }: TLoadingProps) => {
  if (status === "pending") {
    const Components = skeletonsComponents[type];
    return <Components />;
  }
  if (status === "failed") {
    return <LottieErrorHandler err={error as string}/>;
  }
  return <>{children}</>;
};

export default Loading;
