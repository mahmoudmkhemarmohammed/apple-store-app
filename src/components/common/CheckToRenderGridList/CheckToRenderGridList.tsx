import LottieHandler from "@components/feedback/Lottie/LottieHandler";

type TCheckToRenderGridList<T> = {
  records: T[];
  renderItem: (record: T, index: number) => React.ReactNode;
};
const CheckToRenderGridList = <T,>({
  records,
  renderItem,
}: TCheckToRenderGridList<T>) => {
  const itemList =
    records.length > 0 ? (
      records.map((record, index) => renderItem(record, index))
    ) : (
      <LottieHandler message="Your Wishlist Is Empty" type="wishlist" />
    );

  return <>{itemList}</>;
};

export default CheckToRenderGridList;
