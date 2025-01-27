import actGetHomeBanner from "@store/homeBanner/act/actGetHomeBanner";
import { cleanUpHomeBanner } from "@store/homeBanner/homeBannerSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const useHomeBanner = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { banners, loading, error } = useAppSelector(
    (state) => state.homeBanner
  );

  useEffect(() => {
    dispatch(actGetHomeBanner());

    return () => {
      dispatch(cleanUpHomeBanner());
    };
  }, [dispatch]);

  return { navigate, banners, loading, error };
};

export default useHomeBanner;
