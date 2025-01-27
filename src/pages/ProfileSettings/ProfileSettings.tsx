import BtnSubmit from "@components/forms/BtnSubmit/BtnSubmit";
import Input from "@components/forms/Input/Input";
import useProfileSettings from "@hooks/useProfileSettings";

const ProfileSettings = () => {
  
  const {
    loading,
    errors,
    error,
    register,
    handleSubmit,
    submitForm,
    onBlurEmailAvailability,
    emailCheckAvailability,
  } = useProfileSettings();

  return (
    <div className="p-7">
      <h2 className="text-3xl text-[#00aaff] mb-6">Edite Your Profile</h2>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex justify-between flex-wrap gap-3"
      >
        <div className="w-[48%] grow">
          <Input
            label="First Name"
            name={"firstName"}
            register={register}
            error={errors.firstName?.message}
            id="firstName"
          />
        </div>
        <div className="w-[48%] grow">
          <Input
            label="Last Name"
            name={"lastName"}
            register={register}
            error={errors.lastName?.message}
            id="lastName"
          />
        </div>
        <div className="w-[48%] grow">
          <Input
            label="New Email"
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
              emailCheckAvailability == "Failed" ? "Error From The Server" : ""
            }
          />
        </div>
        <div className="w-[48%] grow">
          <Input
            label="Current Password"
            type="password"
            name="currentPassword"
            register={register}
            error={errors.currentPassword?.message}
            id="currentPassword"
          />
        </div>
        <div className="w-[48%] grow">
          <Input
            label="New Password"
            type="password"
            name="password"
            register={register}
            error={errors.password?.message}
            id="password"
          />
        </div>
        <div className="w-[48%] grow">
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
            id="confirmPassword"
          />
        </div>
        {error && (
          <p className="text-[18px] mt-2 font-bold text-red-500">{error}</p>
        )}
        <BtnSubmit
          title="Send"
          isStatus={loading}
          isDisabled={
            emailCheckAvailability === "Failed" ||
            emailCheckAvailability === "NotAvailable"
          }
        />
      </form>
    </div>
  );
};

export default ProfileSettings;
