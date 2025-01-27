import actGetCategories from "@store/categories/act/actGetCategories";
import { cleanUpCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useCategories = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const promise = dispatch(actGetCategories());
    return () => {
      // Clean up the categories when the component unmounts
      dispatch(cleanUpCategories());
      
      // Abort the promise if the component is unmounted (cleanup)
      promise.abort();
    };
  }, [dispatch]);

  return {
    records,
    loading,
    error,
    navigate
  };
};

export default useCategories;
