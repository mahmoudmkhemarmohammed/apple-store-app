import { logOut } from "@store/auth/authSlice";
import { useAppDispatch } from "@store/hooks";
import { AiOutlineOrderedList } from "react-icons/ai";
import { CiLogout, CiTrash } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { IoInformation } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="profile min-w-[300px] bg-white mt-5 rounded-md p-3 h-fit max-sm:min-w-full">
      <ul className="flex justify-between gap-5 flex-col max-sm:flex-row max-sm:flex-wrap *:grow *:bg-[#ebebeb] *:*:flex *:*:justify-between *:*:items-center *:*:p-3 *:rounded *:*:duration-300">
        <li>
          <NavLink to={"/profile"} end className="text-xl">
            <h3>Your Infromation</h3>
            <IoInformation className="text-xl" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/profile/orders"} className="text-xl">
            <h3>Orders</h3>
            <AiOutlineOrderedList className="text-xl" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/profile/settings"} className="text-xl">
            <h3>Settings</h3>
            <IoIosSettings className="text-xl" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/profile/delete-account"} className="text-xl">
            <h3>Delete Account</h3>
            <CiTrash className="text-xl" />
          </NavLink>
        </li>
        <li onClick={() => dispatch(logOut())}>
          <NavLink to={"/"} className={"bg-[#ff0073] rounded-md"}>
            <h3>Logout</h3>
            <CiLogout className="text-xl" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
