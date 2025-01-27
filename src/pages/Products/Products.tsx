import Card from "@components/common/Card/Card";
import CheckToRenderGridList from "@components/common/CheckToRenderGridList/CheckToRenderGridList";
import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import Loading from "@components/feedback/Loading/Loading";
import useProductsByCatPrefix from "@hooks/useProductsByCatPrefix";
const Products = () => {
  const { records, loading, error } = useProductsByCatPrefix();

  return (
    <section className="products">
      <SpecialHeading title="Products" />
      <div
        className={`container ${
          (records.length == 0 && loading === "pending") ||
          (records.length > 0 && loading === "succeeded") ||
          records.length > 0
            ? "grid grid-cols-gridListCategory gap-7"
            : ""
        }`}
      >
        <Loading status={loading} error={error} type="product">
          <CheckToRenderGridList
            records={records}
            renderItem={(record , index) => <Card index={index} key={record.id} {...record} />}
          />
        </Loading>
      </div>
    </section>
  );
};

export default Products;
