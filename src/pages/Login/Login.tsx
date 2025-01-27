import Lottie from "lottie-react";
import Logo from "@assets/lottieFiles/logo.json";
import Input from "@components/forms/Input/Input";
import BtnSubmit from "@components/forms/BtnSubmit/BtnSubmit";
import BtnNavigate from "@components/forms/BtnNavigate/BtnNavigate";
import useLogin from "@hooks/useLogin";
import { Navigate } from "react-router-dom";
import { motion } from "motion/react"
const Login = () => {
  const { error, errors, handleSubmit, submitForm, loading, register , accessToken } =
    useLogin();

  if(accessToken) {
    return <Navigate to={"/"}/>
  }

  return (
    <section>
      <div className="container flex justify-center items-center h-heightNav">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="w-[550px] bg-white rounded-3xl flex flex-col pb-7 px-9 shadow-md overflow-hidden"
        >
          <Lottie
            animationData={Logo}
            loop={false}
            className="w-[120px] mx-auto"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "fit-content" }}
            transition={{ delay: 0.6 , type: "spring"}}
          >
          <Input
            label="Email"
            name={"email"}
            register={register}
            error={errors.email?.message}
            id="email"
            type="email"
          />
          <Input
            label="Password"
            name={"password"}
            register={register}
            error={errors.password?.message}
            type="password"
            id="password"
          />
          {error && (
            <p className="text-[18px] mt-2 font-bold text-red-500">{error}</p>
          )}
          <BtnSubmit title="Login" isStatus={loading} />
          <BtnNavigate title="Register" to="/register" />
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default Login;
