import Card from "@components/common/Card/Card";
import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import Loading from "@components/feedback/Loading/Loading";
import CheckToRenderGridList from "@components/common/CheckToRenderGridList/CheckToRenderGridList";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
  const { productFullInfo, loading, error } = useWishlist();
  return (
    <section className="wishlist">
      <SpecialHeading title="Wishlist" />
      <div
        className={`container ${
          (productFullInfo.length == 0 && loading === "pending") ||
          (productFullInfo.length > 0 && loading === "succeeded") ||
          (productFullInfo.length > 0 )
            ? "grid grid-cols-gridListCategory gap-5"
            : ""
        }`}
      >
        <Loading status={loading} error={error} type="product">
          <CheckToRenderGridList
            records={productFullInfo}
            renderItem={(record , index) => <Card index={index} key={record.id} {...record} />}
          />
        </Loading>
      </div>
    </section>
  );
};

export default Wishlist;
