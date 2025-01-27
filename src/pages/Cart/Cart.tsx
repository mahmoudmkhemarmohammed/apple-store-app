import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import CartItem from "@components/eCommerce/Cart/CartItem";
import Loading from "@components/feedback/Loading/Loading";
import useCart from "@hooks/useCart";

const Cart = () => {
  const {
    products,
    loading,
    error,
    dispatch,
    fullTotal,
    showModal,
    setShowModal,
    showConfirmAnimation,
    setShowConfirmAnimation,
  } = useCart();
  return (
    <section className="cart">
      <SpecialHeading title="Cart" />
      <div className="container">
        <Loading status={loading} error={error} type="cart">
          <CartItem
            showModal={showModal}
            setShowModal={setShowModal}
            showConfirmAnimation={showConfirmAnimation}
            setShowConfirmAnimation={setShowConfirmAnimation}
            dispatch={dispatch}
            products={products}
            fullTotal={fullTotal}
          />
        </Loading>
      </div>
    </section>
  );
};

export default Cart;
