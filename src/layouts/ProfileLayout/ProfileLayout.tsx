import SideBar from "@components/eCommerce/Profile/SideBar";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="container flex gap-3 h-full max-md:flex-col">
      <SideBar />
      <div className="mt-5 pt-3 rounded-md grow bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
