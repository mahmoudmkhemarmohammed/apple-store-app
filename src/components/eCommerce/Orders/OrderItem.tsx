import LazyImage from "@components/common/LazyImage/LazyImage";
import { TOrderItem } from "@types";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import emptyOrder from "@assets/lottieFiles/emptyOrder.json";
import { motion } from "motion/react";
const OrderItem = ({ orderList }: { orderList: TOrderItem[] }) => {
  const navigate = useNavigate();

  const itemRenderd =
    orderList.length > 0 ? (
      orderList.map((order) => {
        const subtotal = order.subtotal;
        return (
          <div className="px-3" key={order.id}>
            <div className="flex justify-between items-center gap-2 mb-3 text-center text-white">
              <h3 className="bg-[#00aaff] p-3 w-1/3 rounded-md">Item</h3>
              <h3 className="bg-[#00aaff] p-3 w-1/3 rounded-md">Price</h3>
              <h3 className="bg-[#00aaff] p-3 w-1/3 rounded-md">Quantity</h3>
            </div>
            {order.items.map((el , index) => (
              <motion.div
                transition={{
                  duration: 0.4,
                  delay: index * .1
                }}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                key={el.id}
                className="flex justify-between items-center gap-2 mb-2 text-center cursor-pointer"
              >
                <div
                  className="w-1/3 flex justify-between items-center px-1 max-lg:flex-col-reverse"
                  onClick={() => navigate(`/all-products/${el.id}`)}
                >
                  <h3>{el.title}</h3>
                  <LazyImage
                    img={el.img}
                    alt={el.title}
                    className="w-[100px]"
                  />
                </div>
                <h3 className="w-1/3">{el.price}$</h3>
                <h3 className="w-1/3">{el.quantity}</h3>
              </motion.div>
            ))}
            <motion.div
              transition={{
                duration: 0.4,
              }}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)"}}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)"}}
              viewport={{ once: true }}
              className="flex justify-between items-center p-3 rounded-md bg-[#e3e3e3] mb-3"
            >
              <h2>Subtotal Order : {order.id}</h2>
              <h2>{subtotal}$</h2>
            </motion.div>
          </div>
        );
      })
    ) : (
      <div className="flex justify-center items-center flex-col relative">
        <h2 className=" absolute left-2/4 top-[15%] -translate-x-2/4 -translate-y-2/4 text-3xl text-red-400">
          You have no orders
        </h2>
        <Lottie animationData={emptyOrder} className="w-[300px]" />
      </div>
    );

  return <>{itemRenderd}</>;
};

export default OrderItem;
