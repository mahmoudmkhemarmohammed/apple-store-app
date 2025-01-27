import { Link } from "react-router-dom";
import LazyImage from "@components/common/LazyImage/LazyImage";
import {
  changeQuantity,
  clearCart,
  deleteFromCart,
} from "@store/cart/cartSlice";
import { CiTrash } from "react-icons/ci";
import CartHeading from "./CartHeading";
import { TProduct } from "@types";
import { AppDispatch } from "@store/store";
import CartTotal from "./CartTotal";
import LottieHandler from "@components/feedback/Lottie/LottieHandler";
import actPlaceOrder from "@store/orders/act/actPlaceOrder";
import { GiConfirmed } from "react-icons/gi";
import { motion } from "motion/react";
import { addToast } from "@store/toasts/toastsSlice";

type TProductCartWithQuantity = TProduct & {
  quantity: number;
};

type TCartItemProps = {
  products: TProductCartWithQuantity[];
  dispatch: AppDispatch;
  fullTotal: number | false;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  showConfirmAnimation: boolean;
  setShowConfirmAnimation: (show: boolean) => void;
};

const CartItem = ({
  products,
  dispatch,
  fullTotal,
  setShowModal,
  showModal,
  showConfirmAnimation,
  setShowConfirmAnimation,
}: TCartItemProps) => {
  const handleClose = () => {
    setShowModal(!showModal);
  };
  const handleConfirmOrder = () => {
    dispatch(actPlaceOrder(fullTotal as number))
      .unwrap()
      .then(() => {
        setShowModal(!showModal);
        setShowConfirmAnimation(!showConfirmAnimation);
        dispatch(clearCart());
        dispatch(
          addToast({
            type: "success",
            message:
              "Order placed successfully Please Wait For a Call From Customer Service",
          })
        );
      })
      .catch(() => {
        dispatch(
          addToast({
            type: "warning",
            message: `Failed to place order. Please try again later.`,
          })
        );
        setShowModal(!showModal);
      })
      .finally(() => {
        setShowModal(!showModal);
      });
  };
  const cartItemRenderd =
    products.length > 0 ? (
      <>
        <CartHeading />
        {products.map((product, index) => (
          <motion.div
            transition={{
              duration: 0.4,
              delay: typeof index === "number" ? index * 0.1 : 0.4,
            }}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            key={product.id}
            className="w-full h-[110px] flex justify-between items-center bg-white rounded-lg mb-4"
          >
            <Link
              to={`/all-products/${product.id}`}
              className="w-1/4 product flex gap-3 items-center max-md:gap-1 overflow-hidden max-lg:flex-col max-lg:gap-1"
            >
              <LazyImage
                className="w-[100px] max-md:w-[60px]"
                img={product.img}
                alt={product.title}
              />
              <h2 className="text-xl max-md:text-sm">
                {product.title.length > 9
                  ? `${product.title.substring(0, 9)}...`
                  : product.title}
              </h2>
            </Link>
            <h2 className="w-1/4 text-xl max-md:text-sm max-md:text-center">
              {product.price} $
            </h2>
            <div className="w-1/4 quantity">
              <div className="flex flex-col gap-2 items-center w-fit">
                <input
                  defaultValue={product.quantity}
                  type="number"
                  name="quantity"
                  min={1}
                  className="border-2 border-[#d2d2d2] w-[100px] rounded text-center max-md:w-[60px]"
                  onChange={(e) =>
                    +e.target.value > 0
                      ? dispatch(
                          changeQuantity({ [product.id]: e.target.value })
                        )
                      : dispatch(changeQuantity({ [product.id]: 1 }))
                  }
                />
              </div>
            </div>
            <h2 className="w-1/4 text-xl flex justify-between items-center max-md:text-sm max-md:text-center">
              {product.price * product.quantity}$
              <CiTrash
                className="text-3xl text-red-500 cursor-pointer mr-[10px]"
                onClick={() => dispatch(deleteFromCart(product.id))}
              />
            </h2>
          </motion.div>
        ))}
        <CartTotal
          fullTotal={fullTotal}
          dispatch={dispatch}
          showModal={showModal}
          setShowModal={setShowModal}
        />

        {!!showModal && (
          <div className="modal-box w-[550px] h-[300px] bg-white shadow p-7 text-center flex flex-col justify-between rounded-xl fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50">
            <div className="flex justify-center items-center">
              <GiConfirmed className="text-6xl text-green-500" />
            </div>
            <h3 className="text-2xl">Are you sure to confirm the order?</h3>
            <div>
              <button
                className="w-[150px] h-[50px] bg-green-500 text-white font-bold rounded-md"
                onClick={handleConfirmOrder}
              >
                Confirm
              </button>
              <button
                onClick={handleClose}
                className="w-[150px] h-[50px] bg-red-500 text-white font-bold rounded-md ml-4"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </>
    ) : showConfirmAnimation ? (
      <LottieHandler type="confirmOrder" />
    ) : (
      <LottieHandler message="Your Cart Is Empty" type="cart" />
    );

  return <>{cartItemRenderd}</>;
};

export default CartItem;
