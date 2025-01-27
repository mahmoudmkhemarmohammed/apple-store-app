import error from "@assets/lottieFiles/error.json";
import networkError from "@assets/lottieFiles/networkError.json";
import Lottie from "lottie-react";
import { useLocation } from "react-router-dom";
const LottieErrorHandler = ({ err }: { err: string }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={
        pathname == "/"
          ? "w-full h-full flex justify-center items-center flex-col"
          : "h-heightNav flex justify-center items-center flex-col"
      }
    >
      {err == "Network Error" ? (
        <Lottie
          animationData={networkError}
          loop={true}
          className={pathname == "/" || pathname == "/all-products" ? "w-[300px]" : "w-[600px]"}
        />
      ) : (
        <>
        <h1 className="text-2xl font-bold text-red-700">{err}</h1>
          <Lottie
            animationData={error}
            loop={true}
            className={pathname == "/" || pathname == "/all-products" ? "w-[300px]" : "w-[600px]"}
          />
        </>
      )}
    </div>
  );
};

export default LottieErrorHandler;
