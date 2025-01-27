import { useForm, SubmitHandler } from "react-hook-form";
import { signUpSchema, TSignUpType } from "@validations/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useEmailCheckAvailability from "@hooks/useEmailCheckAvailability";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actAuthRegister from "@store/auth/act/actAuthRegister";
import { useEffect } from "react";
import { resetUI } from "@store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { addToast } from "@store/toasts/toastsSlice";
const useRegister = () => {
  const dispatch = useAppDispatch();
  const { loading, error, accessToken } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
    getFieldState,
  } = useForm<TSignUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
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
  const submitForm: SubmitHandler<TSignUpType> = (data) => {
    const { firstName, lastName, email, password } = data;
    dispatch(actAuthRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => {
        navigate("/login?message=account_created");
      })
      .catch((error) => {
        dispatch(
          addToast({
            message: error,
            type: "danger",
          })
        );
      });
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);
  return {
    handleSubmit,
    submitForm,
    error,
    errors,
    register,
    emailCheckAvailability,
    onBlurEmailAvailability,
    loading,
    accessToken,
    navigate,
  };
};

export default useRegister;
