import Lottie from "lottie-react";
import DeleteAccountAnimate from "@assets/lottieFiles/DeleteAccount.json";
import Input from "@components/forms/Input/Input";
import BtnSubmit from "@components/forms/BtnSubmit/BtnSubmit";
import useDeleteAccount from "@hooks/useDeleteAccount";
const DeleteAccount = () => {
  const { register, handleSubmit, submitForm, error, errors, loading } =
    useDeleteAccount();
  return (
    <div className="flex flex-col items-center py-5">
      <Lottie
        animationData={DeleteAccountAnimate}
        loop={false}
        className="w-[250px]"
      />

      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          label="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message}
          id="password"
        />
        {error && (
          <p className="text-[18px] mt-2 font-bold text-red-500">{error}</p>
        )}
        <BtnSubmit title="Send" isStatus={loading} />
      </form>
    </div>
  );
};

export default DeleteAccount;
