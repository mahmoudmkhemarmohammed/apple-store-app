import { useForm, SubmitHandler } from "react-hook-form";
import { signInSchema, TsignInType } from "@validations/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actAuthLogin from "@store/auth/act/actAuthLogin";
import { useEffect } from "react";
import { resetUI } from "@store/auth/authSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addToast } from "@store/toasts/toastsSlice";
const useLogin = () => {
  const dispatch = useAppDispatch();
  const { loading, error, accessToken } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams("");


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TsignInType>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });
  const submitForm: SubmitHandler<TsignInType> = (data) => {
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  useEffect(() => {
    if (searchParams.get("message")) {
      dispatch(
        addToast({
          message: `${searchParams.get("message")} successfully`,
          type: "success",
        })
      );

      dispatch(
        addToast({
          message: "You Can Login Now",
          type: "info",
        })
      );
      setSearchParams("");
    }

    return () => {
      dispatch(resetUI());
    };
  }, [dispatch, searchParams, setSearchParams]);
  return {
    handleSubmit,
    submitForm,
    register,
    errors,
    error,
    loading,
    accessToken,
  };
};

export default useLogin;
