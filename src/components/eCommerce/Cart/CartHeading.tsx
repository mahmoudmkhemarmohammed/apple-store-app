import { CiTrash } from "react-icons/ci";

const CartHeading = () => {
  return (
    <div className="container w-full flex justify-between items-center bg-white h-[100px] rounded-lg mb-4">
      <h2 className="text-xl w-1/4 max-sm:text-sm">Product</h2>
      <h2 className="text-xl w-1/4 max-sm:text-sm">Price</h2>
      <h2 className="text-xl w-1/4 max-sm:text-sm">Quantity</h2>
      <h2 className="text-xl w-1/4 max-sm:text-sm flex justify-between items-center">
        Subtotal <CiTrash className="text-3xl text-red-500 cursor-pointer" />
      </h2>
    </div>
  );
};

export default CartHeading;
