import { AiOutlineLoading3Quarters } from "react-icons/ai";

const BtnSubmit = ({
  title,
  isDisabled,
  isStatus,
}: {
  title: string;
  isStatus: string;
  isDisabled?: boolean;
}) => {
  return (
    <button
      type="submit"
      className={`bg-[#65ff00] shadow p-3 rounded-md mt-2 flex justify-center items-center w-full ${
        isDisabled ? "bg-red-500 text-white" : ""
      }`}
      disabled={isDisabled}
    >
      {isStatus === "pending" ? (
        <AiOutlineLoading3Quarters className="animate-spin text-[27px] text-white" />
      ) : isDisabled ? (
        "Error Email"
      ) : (
        title
      )}
    </button>
  );
};

export default BtnSubmit;
