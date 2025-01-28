import Card from "@components/common/Card/Card";
import CheckToRenderGridList from "@components/common/CheckToRenderGridList/CheckToRenderGridList";
import SideBar from "@components/eCommerce/SideBar/SideBar";
import Loading from "@components/feedback/Loading/Loading";
import useAllProducts from "@hooks/useAllProducts";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const AllProducts = () => {
  const {
    records,
    loading,
    error,
    handelPagination,
    handelSetPerfix,
    handelSortWithoutRange,
    handlePriceRangeChange,
    page,
    arrayFromTotalPage,
    totalPage,
    handleSearch,
    handelPrevAndNextButton
  } = useAllProducts();

  return (
    <section>
      <div className="container flex gap-5 h-full pt-5 max-md:flex-col">
        <SideBar
          handleSearch={handleSearch}
          setPrefix={handelSetPerfix}
          sortWithoutRange={handelSortWithoutRange}
          handlePriceRangeChange={handlePriceRangeChange}
        />
        <div
          className={`${
            (records.length == 0 && loading === "pending") ||
            (records.length > 0 && loading === "succeeded") ||
            records.length > 0
              ? "grow grid grid-cols-gridListCategory gap-5 h-full"
              : "w-full"
          }`}
        >
          <Loading status={loading} error={error} type="product">
            <CheckToRenderGridList
              records={records}
              renderItem={(record, index) => (
                <Card index={index} key={record.id} {...record} />
              )}
            />
          </Loading>
        </div>
      </div>
      {records.length > 0 && (
        <div className="pagination flex justify-center items-center mt-6 gap-3 p-2">
          <MdKeyboardArrowLeft
            onClick={() => handelPrevAndNextButton("prev")}
            className={`text-xl w-11 h-11 p-2 rounded shadow-lg bg-[#00aaff] text-white cursor-pointer ${
              page === 1 && "cursor-not-allowed bg-[#ff006f48] pointer-events-none"
            }`}
          />
          {arrayFromTotalPage.map((pageNumber) => {
            return (
              <button
                key={pageNumber}
                onClick={() => handelPagination(pageNumber)}
                className={`text-xl p-2 w-11 rounded shadow-lg duration-300 hover:bg-[#00aaff] ${
                  pageNumber == page ? "bg-[#0e6aff] text-white" : "bg-white"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
          <MdKeyboardArrowRight
            onClick={() => handelPrevAndNextButton("next")}
            className={`text-xl w-11 h-11 p-2 rounded shadow-lg bg-[#00aaff] text-white cursor-pointer ${
              page === totalPage && "cursor-not-allowed bg-[#ff006f48] pointer-events-none"
            }`}
          />
        </div>
      )}
    </section>
  );
};

export default AllProducts;
