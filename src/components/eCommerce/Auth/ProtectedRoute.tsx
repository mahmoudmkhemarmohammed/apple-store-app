import LottieHandler from "@components/feedback/Lottie/LottieHandler";
import { useAppSelector } from "@store/hooks";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAppSelector((state) => state.auth);
  if (!accessToken) {
    return (
      <LottieHandler
      loop={false}
        message="Please Login To View Content."
        type="protectedRoute"
      />
    );
  }
  return <>{children}</>;
};

export default ProtectedRoute;
