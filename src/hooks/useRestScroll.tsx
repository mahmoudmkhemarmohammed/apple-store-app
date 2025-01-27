import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useRestScroll = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return null;
};

export default useRestScroll;
