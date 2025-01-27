import Lottie from "lottie-react";
import wishlist from "@assets/lottieFiles/wishlist.json";
import cart from "@assets/lottieFiles/emptyCart.json";
import protectedRoute from "@assets/lottieFiles/protectedRoute.json";
import confirmOrder from "@assets/lottieFiles/placeOrder.json";
import * as motion from "motion/react-client";
import { useLocation } from "react-router-dom";
const lottieFiles = {
  wishlist,
  cart,
  protectedRoute,
  confirmOrder,
};

const LottieHandler = ({
  type,
  loop = true,
  message,
}: {
  type: keyof typeof lottieFiles;
  loop?: boolean;
  message?: string;
}) => {
  const { pathname } = useLocation();

  const animation = lottieFiles[type];
  return (
    <div className="flex justify-center items-center flex-col h-heightNav">
      <motion.div
        initial={{ translateY: 500, opacity: 0, scale: 0 }}
        animate={{ translateY: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          scale: { type: "spring", visualDuration: 0.6, bounce: 0.6 },
        }}
      >
        <h3 className="text-3xl text-[#00aaff] font-bold max-sm:text-2xl">
          {pathname === "/wishlist" ||
          pathname === "/cart" ||
          pathname === "/profile"
            ? message
            : "No Data Available"}
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <Lottie
          animationData={animation}
          loop={loop}
          className="w-[700px] max-md:w-[500px] max-sm:w-[330px]"
        />
      </motion.div>
    </div>
  );
};

export default LottieHandler;
