import Footer from "@components/common/Footer/Footer";
import Header from "@components/common/Header/Header";
import ToastsList from "@components/feedback/Toasts/ToastsList";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />

      <div className="min-h-heightLayout">
        <Outlet />
      </div>

      <ToastsList />

      <Footer />
    </>
  );
};

export default MainLayout;
