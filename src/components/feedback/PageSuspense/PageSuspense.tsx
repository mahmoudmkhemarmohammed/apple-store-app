import React, { Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "@assets/lottieFiles/loading.json";
const PageSuspense = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className="min-h-heightLayout flex justify-center items-center">
          <Lottie animationData={Loading} loop={true} className="w-[600px]"/>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default PageSuspense;
