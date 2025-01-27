import CheckToRenderGridList from "@components/common/CheckToRenderGridList/CheckToRenderGridList";
import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import Category from "@components/eCommerce/Category/Category";
import Loading from "@components/feedback/Loading/Loading";
import useCategories from "@hooks/useCategories";
const Categories = () => {
  const { records, loading, error } = useCategories();

  return (
    <section className="categories">
      <SpecialHeading title="Categories" />
      <div
        className={`container ${
          (records.length == 0 && loading === "pending") ||
          (records.length > 0 && loading === "succeeded")
            ? "grid grid-cols-gridListCategory gap-5"
            : ""
        }`}
      >
        <Loading status={loading} error={error} type="category">
          <CheckToRenderGridList
            records={records}
            renderItem={(record , index) => <Category index={index} key={record.id} {...record} />}
          />
        </Loading>
      </div>
    </section>
  );
};

export default Categories;
