import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useNavigate } from "react-router-dom";
import {
  deleteAccount,
  TDeleteAccount,
} from "@validations/deleteAccountSchema";
import actDeleteAccount from "@store/account/act/actDeleteAccount";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logOut } from "@store/auth/authSlice";
import { addToast } from "@store/toasts/toastsSlice";
const useDeleteAccount = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, loading } = useAppSelector((state) => state.account);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TDeleteAccount>({
    mode: "onBlur",
    resolver: zodResolver(deleteAccount),
  });
  const submitForm: SubmitHandler<TDeleteAccount> = (data) => {
    const { password } = data;
    dispatch(actDeleteAccount(password))
      .unwrap()
      .then(() => {
        dispatch(
          addToast({
            message: "Account deleted successfully",
            type: "danger",
          })
        );
        dispatch(logOut());
        navigate("/");
      });
  };

  return {
    register,
    handleSubmit,
    submitForm,
    error,
    errors,
    loading,
  };
};

export default useDeleteAccount;
