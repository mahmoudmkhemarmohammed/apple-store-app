import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetProductsFilteration from "@store/products/act/actGetProductsFilteration";
import { cleanUpProductsFilteration } from "@store/products/productsFilterationSlice";
import { useEffect, useState } from "react";
const useAllProducts = () => {
  const dispatch = useAppDispatch();
  const { records, error, loading, total } = useAppSelector(
    (state) => state.productsFilteration
  );

  const [page, setPage] = useState(1);
  const [prefix, setPrefix] = useState<string[]>([]);
  const [sortWithoutRange, setSortWithoutRange] = useState("desc");
  const [priceRange, setPriceRange] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const totalPage = Math.ceil(total / 6);

  const arrayFromTotalPage = Array(totalPage)
    .fill(0)
    .map((_, i) => i + 1);

  const handelPagination = (pageNumber: number) => {
    setPage(pageNumber);
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  };

  const handelPrevAndNextButton = (typeBtnAction: string) => {
    if (typeBtnAction === "prev") {
      setPage((prev) => (prev > 1 ? --prev : 1));
      window.scroll({
        top: 0,
        behavior: "instant",
      });
      
    } else {
      setPage((prev) => (prev < totalPage ? ++prev : totalPage));
      window.scroll({
        top: 0,
        behavior: "instant",
      });
    }
  };

  const handelSetPerfix = (value: string) => {
    setPage(1);
    if (prefix.includes(value)) {
      setPrefix(prefix.filter((el) => el !== value));
    } else {
      setPrefix((prev) => [...prev, value]);
    }
  };

  const handelSortWithoutRange = (value: string) => {
    setSortWithoutRange(value);
  };

  const handlePriceRangeChange = (value: string[]) => {
    setPage(1);
    setPriceRange(value);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    const promise = dispatch(
      actGetProductsFilteration({
        page,
        prefix,
        sortWithoutRange,
        priceRange,
        search,
      })
    );
    return () => {
      // Abort the promise if the component is unmounted (cleanup)
      promise.abort();
      // Clean up the products filteration state when the component is unmounted
      dispatch(cleanUpProductsFilteration());
    };
  }, [dispatch, page, prefix, sortWithoutRange, priceRange, search]);

  return {
    records,
    loading,
    error,
    arrayFromTotalPage,
    handelPagination,
    handelSetPerfix,
    handelSortWithoutRange,
    handlePriceRangeChange,
    page,
    totalPage,
    handleSearch,
    handelPrevAndNextButton,
  };
};

export default useAllProducts;
