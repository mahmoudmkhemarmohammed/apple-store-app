import { clearCart } from "@store/cart/cartSlice";
import { useAppSelector } from "@store/hooks";
import { AppDispatch } from "@store/store";

import {motion} from "motion/react"

type TCartTotal = {
  fullTotal: number | false;
  dispatch: AppDispatch;
  showModal : boolean,
  setShowModal : (value : boolean) => void,
};
const CartTotal = ({ fullTotal, dispatch , showModal , setShowModal }: TCartTotal) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  return (
    <motion.div
    transition={{duration: .4 , delay: .4}}
    initial={{opacity: 0 , y: 10 , filter: "blur(4px)"}}
    whileInView={{opacity: 1 , y: 0 ,filter: "blur(0px)"}}
    viewport={{once: true}}
    className="flex justify-between items-center gap-2 max-sm:px-1">

      {accessToken && (
        <button
        onClick={() => setShowModal(!showModal)}
          className="text-xl bg-[#00aaff] p-4 rounded-md text-white grow max-md:text-xs"
        >
          Place Order
        </button>
      )}
      <h2 className="text-xl bg-white p-4 rounded-md grow max-md:text-xs">
        Total : {fullTotal} $
      </h2>
      <button
        className="text-xl bg-[#ff006a] p-4 rounded-md text-white capitalize grow max-md:text-xs"
        onClick={() => dispatch(clearCart())}
      >
        clear cart
      </button>
    </motion.div>
  );
};

export default CartTotal;
