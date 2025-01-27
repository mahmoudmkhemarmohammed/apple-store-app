import { zodResolver } from "@hookform/resolvers/zod";
import useEmailCheckAvailability from "@hooks/useEmailCheckAvailability";
import actEditeAccountData from "@store/account/act/actEditeAccountData";
import { logOut } from "@store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToast } from "@store/toasts/toastsSlice";
import {
  editeProfileData,
  TEditeProfileData,
} from "@validations/editeAccountDataSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const useProfileSettings = () => {
  const navigate = useNavigate()
  const { loading, error } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    trigger,
    getFieldState,
    handleSubmit,
  } = useForm<TEditeProfileData>({
    mode: "onBlur",
    resolver: zodResolver(editeProfileData),
  });

  const {
    checkEmailAvailability,
    emailCheckAvailability,
    prevEmail,
    resetCheckEmailAvailability,
  } = useEmailCheckAvailability();
  const onBlurEmailAvailability = async (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    await trigger("email");
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && prevEmail !== value) {
      checkEmailAvailability(value);
    }
    if (isDirty && invalid && prevEmail) {
      resetCheckEmailAvailability();
    }
  };

  const submitForm: SubmitHandler<TEditeProfileData> = (data) => {
    dispatch(actEditeAccountData(data))
      .unwrap()
      .then(() => {
        dispatch(
          addToast({
            message: "account info has been updated successfully",
            type: "success",
          })
        );
        dispatch(logOut());
        navigate("/")
      })
      .catch((error) =>
        dispatch(
          addToast({
            message: error,
            type: "danger",
          })
        )
      );
  };
  return {
    loading,
    errors,
    error,
    register,
    handleSubmit,
    submitForm,
    onBlurEmailAvailability,
    emailCheckAvailability,
  };
};

export default useProfileSettings;
