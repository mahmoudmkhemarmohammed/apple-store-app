import axios from "axios";
import { useState } from "react";

type TStatus = "idle" | "Checking" | "Available" | "NotAvailable" | "Failed";
const useEmailCheckAvailability = () => {
  const [emailCheckAvailability, setEmailCheckAvailability] =
    useState<TStatus>("idle");
  const [prevEmail, setPrevEmail] = useState<null | string>(null);
  const checkEmailAvailability = async (email: string) => {
    setEmailCheckAvailability("Checking");
    setPrevEmail(email);
    try {
      const res = await axios.get(`/users?email=${email}`);
      if (!res.data.length) {
        setEmailCheckAvailability("Available");
      } else {
        setEmailCheckAvailability("NotAvailable");
      }
    } catch (error) {
      console.log(error);
      setEmailCheckAvailability("Failed");
    }
  };

  const resetCheckEmailAvailability = () => {
    setEmailCheckAvailability("idle");
    setPrevEmail(null);
  };
  return {
    emailCheckAvailability,
    prevEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  };
};

export default useEmailCheckAvailability;
