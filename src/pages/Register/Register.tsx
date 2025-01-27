import Lottie from "lottie-react";
import Logo from "@assets/lottieFiles/logo.json";
import Input from "@components/forms/Input/Input";
import BtnSubmit from "@components/forms/BtnSubmit/BtnSubmit";
import BtnNavigate from "@components/forms/BtnNavigate/BtnNavigate";
import useRegister from "@hooks/useRegister";
import { Navigate } from "react-router-dom";
import { motion } from "motion/react";
const Register = () => {
  const {
    handleSubmit,
    submitForm,
    error,
    errors,
    register,
    emailCheckAvailability,
    onBlurEmailAvailability,
    loading,
    accessToken,
  } = useRegister();

  if (accessToken) {
    return <Navigate to={"/"} />;
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
              label="First Name"
              name="firstName"
              register={register}
              error={errors.firstName?.message}
              id="firstName"
            />
            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName?.message}
              id="lastName"
            />
            <Input
              label="Email"
              type="email"
              name="email"
              register={register}
              error={errors.email?.message}
              id="email"
              onBlur={onBlurEmailAvailability}
              textForm={
                emailCheckAvailability == "Checking"
                  ? "We 're Currently Checking the Availability Of This Email Please Wait A Moment"
                  : ""
              }
              available={
                emailCheckAvailability == "Available"
                  ? "This email is available for use"
                  : ""
              }
              notAvailable={
                emailCheckAvailability == "NotAvailable"
                  ? "This email already in use"
                  : ""
              }
              failed={
                emailCheckAvailability == "Failed"
                  ? "Error From The Server"
                  : ""
              }
            />
            <Input
              label="password"
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
              id="password"
            />
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword?.message}
              id="confirmPassword"
            />
            {error && (
              <p className="text-[18px] mt-2 font-bold text-red-500">{error}</p>
            )}
            <BtnSubmit
              title="Register"
              isStatus={loading}
              isDisabled={
                emailCheckAvailability === "Failed" ||
                emailCheckAvailability === "NotAvailable"
              }
            />
            <BtnNavigate to="/login" title="Login" />
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default Register;
