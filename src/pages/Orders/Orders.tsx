import OrderItem from "@components/eCommerce/Orders/OrderItem";
import Loading from "@components/feedback/Loading/Loading";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetOrders from "@store/orders/act/actGetOrders";
import { cleanUpOrders } from "@store/orders/ordersSlice";
import { useEffect } from "react";

const Orders = () => {
  const { loading, error, orderList } = useAppSelector((state) => state.orders);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(actGetOrders());
    return () => {
      // Abort the fetch request if component unmounts to free up resources.
      promise.abort()
      // Clean up the orders when the component unmounts.
      dispatch(cleanUpOrders());
    }
  }, [dispatch]);

  return <Loading status={loading} error={error} type="cart">
    <OrderItem orderList={orderList} />
  </Loading>;
};

export default Orders;
